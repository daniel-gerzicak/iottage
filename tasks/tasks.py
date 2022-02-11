from background_task import background
from django.core.mail import send_mail


def checkSensorsActive():
    send_mail(
        "Sensors inactive",
        "this is a test",
        "notifications@iotttage.com",
        ["dan.gerzicak@gmail.com"],
        fail_silently=True,
    )
