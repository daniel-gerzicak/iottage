# Generated by Django 3.0.8 on 2021-01-13 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0005_auto_20210113_1731'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='location',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='name',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
