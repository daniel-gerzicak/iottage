from django.db import models


# Create your models here.
class Sensor(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    sensor_type = models.CharField(max_length=15, default="unknown")
