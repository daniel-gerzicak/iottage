from django.contrib.auth import authenticate, login
from django.shortcuts import redirect, render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.
class LoginApiView(APIView):
    def post(self, request):
        user = authenticate(username=request.data["username"], password=request.data["password"])
        if user is not None:
            login(request, user)
            redirect("/")
            return Response(status=status.HTTP_202_ACCEPTED)

        # A backend authenticated the credentials
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    # No backend authenticated the credentials
