from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from sensors.models import Sensor
from sensors.serializers import SensorSerializer


# Create your views here.
def main(request):
    return HttpResponse("<h1>Test sensors</h1>")


class SensorCreateView(generics.CreateAPIView):
    serializer_class = SensorSerializer
    "oi"
