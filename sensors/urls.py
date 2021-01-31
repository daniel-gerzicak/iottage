from django import views
from django.urls import include, path
from rest_framework import routers

from .views import EntryView, SensorCreateView, SensorGetView

router = routers.DefaultRouter()
router.register(r"sensors", SensorGetView)

urlpatterns = [
    path("create/", SensorCreateView.as_view()),
    path("entry/", EntryView.as_view()),
    path("", include(router.urls)),
]
