from django.urls import path

from .views import EntryView, SensorCreateView

urlpatterns = [path("create/", SensorCreateView.as_view()), path("entry/", EntryView.as_view())]
