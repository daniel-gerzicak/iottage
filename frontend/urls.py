from django.http import request
from django.urls import path

from .views import IndexView

urlpatterns = [path("", IndexView)]
