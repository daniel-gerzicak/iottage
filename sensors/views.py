from datetime import datetime

from django.db.models.base import Model
from django.http import HttpResponse
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import View
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from sensors.models import HumidityEntry, PressureEntry, Sensor, TemperatureEntry
from sensors.serializers import HumSerializer, SensorSerializer, TempSerializer

# Create your views here.


class SensorGetView(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer


class HumidityGetView(viewsets.ModelViewSet):
    queryset = HumidityEntry.objects.all()
    serializer_class = HumSerializer


class TemperatureGetView(viewsets.ModelViewSet):
    queryset = TemperatureEntry.objects.all()
    serializer_class = TempSerializer


def main(request):
    return HttpResponse("<h1>Test sensors</h1>")


class SensorCreateView(generics.CreateAPIView):
    serializer_class = SensorSerializer


class EntryView(APIView):
    def post(self, requst):
        queryset = Sensor.objects.filter(id=requst.data["id"])
        if queryset.exists():
            sens = queryset[0]
            sens.last_contact = requst.data["datetime"]
            sens.last_value = requst.data["value"]
            sens.save()

            if sens.sensor_type == "hum":
                entry = HumidityEntry(
                    sensor=sens, datetime=requst.data["datetime"], humidity=requst.data["value"]
                )
                entry.save()
                return HttpResponse("201")

            elif sens.sensor_type == "temp":
                entry = TemperatureEntry(
                    sensor=sens, datetime=requst.data["datetime"], temperature=requst.data["value"]
                )
                entry.save()
                return HttpResponse("201")

            elif sens.sensor_type == "press":
                entry = PressureEntry(
                    sensor=sens, datetime=requst.data["datetime"], pressure=requst.data["value"]
                )
                entry.save()
                return HttpResponse("201")

        else:
            return HttpResponse("400")

