# Generated by Django 3.0.8 on 2021-01-29 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0009_auto_20210114_1238'),
    ]

    operations = [
        migrations.AddField(
            model_name='sensor',
            name='last_value',
            field=models.FloatField(default=0, max_length=5),
            preserve_default=False,
        ),
    ]