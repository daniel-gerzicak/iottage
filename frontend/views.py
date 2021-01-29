from django.contrib.auth.mixins import LoginRequiredMixin
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.views import View

# Create your views here.


def IndexView(request):
    if not request.user.is_authenticated:
        return redirect("/login/")

    else:
        return render(request, "frontend/index.html")


def LoginView(request):
    return render(request, "frontend/login.html")

