from django.db import models
from django.db.models.fields.related import ForeignKey


# Create your models here.
class Sensor(models.Model):
    name = models.CharField(unique=True, max_length=20)
    location = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    last_contact = models.DateTimeField(blank=True, null=True,)
    is_active = models.BooleanField(blank=True, null=True)

    options = [("hum", "Humidity"), ("temp", "Temperature"), ("press", "Pressure")]
    sensor_type = models.CharField(max_length=15, choices=options,)

    def __str__(self):
        return "%s, %s" % (self.name, self)


class Entry(models.Model):
    class Meta:
        abstract = True

    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    datetime = models.DateTimeField()


class HumidityEntry(Entry):
    humidity = models.FloatField(max_length=5)


class TemperatureEntry(Entry):
    temperature = models.FloatField(max_length=5)


class PressureEntry(Entry):
    Presuure = models.FloatField(max_length=5)

