# Generated by Django 4.2.11 on 2024-03-16 16:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="City",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("isCapital", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="Continent",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="Poi",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "cityId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.city"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="poiType",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Tour",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("startDate", models.DateField()),
                ("endDate", models.DateField()),
                (
                    "cityId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.city"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="TourUsers",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "tourId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.tour"
                    ),
                ),
                (
                    "userId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="TourPoi",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "poiId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.poi"
                    ),
                ),
                (
                    "tourId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.tour"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="PoiDetails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("coordLat", models.DecimalField(decimal_places=6, max_digits=8)),
                ("coordLong", models.DecimalField(decimal_places=6, max_digits=9)),
                (
                    "poiId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.poi"
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="poi",
            name="poiType",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tours.poitype"
            ),
        ),
        migrations.CreateModel(
            name="Country",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("language", models.CharField(max_length=255)),
                ("currency", models.CharField(max_length=255)),
                (
                    "continendId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tours.continent",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="city",
            name="countryId",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tours.country"
            ),
        ),
    ]
