from django.urls import path, include
from rest_framework import routers
from . import views
from .views import LoginView, user_list


urlpatterns = [
    # /tours/
    path("", views.toursIndex, name="index"),
    #ex:/tours/countries/1/
    path("countries/<int:country_id>/", views.countryDetail, name="detail"),
    
]
