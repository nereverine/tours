from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
    # /tours/
    path("", views.index, name="index"),
    #ex:/tours/1/
    path("countries/<int:country_id>/", views.countryDetail, name="detail"),
]
