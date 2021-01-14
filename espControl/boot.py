import json
import socket
import time
from time import sleep

import dht
import machine
import micropython
import network
import ntptime
import urequests
import utime
from machine import Pin


def getTime():
    ntptime.host = "1.europe.pool.ntp.org"
    try:
        ntptime.settime()
        datetime = time.localtime()
        now = str(datetime[0]) + "-" + str(datetime[1]) + "-" + str(datetime[2]) + " "
        now = now + str(int(datetime[3] + 1)) + ":" + str(datetime[4]) + ":" + str(datetime[5])
        return now
    except:
        print("Error syncing time")


def wifi_connect(ssid, pwd, interface):
    """ connect to wifi with provided password and print the result
        20 sec delay loop the check if we're connected
    """
    # activate the interface
    interface.active(True)

    # connect it to the network
    interface.connect(ssid, pwd)

    # check result
    print("Connection attempt to WiFi {} with psw {}".format(ssid, pwd))
    for i in range(0, 20):
        if not (interface.isconnected()):
            print("." * i)
            time.sleep(1)
        else:
            break
    print("Wifi connected:", interface.isconnected())
    print("Wifi config:", interface.ifconfig())


def measureTemp(sensor):
    try:
        sensor.measure()
        temp = sensor.temperature()
        return temp
    except OSError as e:
        print("Failed to read sensor.")


def measureHum(sensor):
    try:
        sensor.measure()
        hum = sensor.humidity()
        return hum
    except OSError as e:
        print("Failed to read sensor.")


def postHum(sensor):
    val = {
        "id": "2",
        "datetime": getTime(),
        "value": measureHum(sensor),
    }
    head = {"Content-Type": "application/json"}
    print(
        urequests.post(
            "http://192.168.0.42:8000/sensors/entry/", data=json.dumps(val), headers=head
        )
    )


# -----------------------------------------------------------------------------------------------------------------#
micropython.alloc_emergency_exception_buf(100)

SSID = "GNET"
wifiPassword = "psw4Internet"

wlan0 = network.WLAN(network.STA_IF)

if wlan0.isconnected() == False:
    wifi_connect(SSID, wifiPassword, wlan0)
else:
    print("already connected")

sensor = dht.DHT22(Pin(14))
postHum(sensor)

