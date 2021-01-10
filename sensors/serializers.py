from django.db.models import fields
from rest_framework import serializers

from sensors.models import Sensor


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ("id", "sensor_type", "created_at")
