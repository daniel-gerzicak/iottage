from django.urls.conf import path

from .views import LoginApiView

urlpatterns = [
    path("login", LoginApiView.as_view()),
]
