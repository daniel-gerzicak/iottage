from django.http import request
from django.urls import path

from .views import IndexView, LoginView

urlpatterns = [path("", IndexView), path("login/", LoginView)]
