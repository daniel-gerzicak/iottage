from django import views
from django.urls import include, path
from rest_framework import routers

from .views import EntryView, HumidityGetView, SensorCreateView, SensorGetView, TemperatureGetView

router = routers.DefaultRouter()
router.register(r"sensors", SensorGetView)
router.register(r"hum", HumidityGetView)
router.register(r"temp", TemperatureGetView)

urlpatterns = [
    path("create/", SensorCreateView.as_view()),
    path("entry/", EntryView.as_view()),
    path("", include(router.urls)),
]
