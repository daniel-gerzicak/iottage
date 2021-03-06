# Generated by Django 3.0.8 on 2021-01-14 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0006_auto_20210113_1745'),
    ]

    operations = [
        migrations.AddField(
            model_name='humidityentry',
            name='value',
            field=models.CharField(default=0, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='pressureentry',
            name='value',
            field=models.CharField(default=0, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='temperatureentry',
            name='value',
            field=models.CharField(default=0, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='name',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]
