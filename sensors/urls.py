from django.urls import path

from .views import SensorCreateView, main

urlpatterns = [
    path("create/", SensorCreateView.as_view()),
]
