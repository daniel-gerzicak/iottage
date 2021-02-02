from django.db.models import fields
from rest_framework import serializers

from sensors.models import HumidityEntry, Sensor, TemperatureEntry


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ("id", "name", "location", "sensor_type", "last_contact", "last_value")


class HumSerializer(serializers.ModelSerializer):
    class Meta:
        model = HumidityEntry
        fields = ("sensor", "datetime", "humidity")


class TempSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemperatureEntry
        fields = ("sensor", "datetime", "temperature")
