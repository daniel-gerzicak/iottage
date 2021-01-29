from django.urls.conf import path

from .views import LoginApiView, LogoutView

urlpatterns = [path("login", LoginApiView.as_view()), path("logout", LogoutView)]
