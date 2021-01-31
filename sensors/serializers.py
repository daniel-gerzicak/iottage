from django.db.models import fields
from rest_framework import serializers

from sensors.models import Entry, HumidityEntry, Sensor


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ("id", "name", "location", "sensor_type", "last_contact", "last_value")


class HumSerializer(serializers.ModelSerializer):
    class Meta:
        model = HumidityEntry
        fields = ("sensor", "datetime, humidity")
