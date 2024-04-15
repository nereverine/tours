from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TourSerializer
from .models import Tour

# Create your views here.
def index(request):
    return HttpResponse("At Main Index")

def toursIndex(request):
    return HttpResponse("At Tours Index")

def countryDetail(request, country_id):
    return HttpResponse("You're looking at the country %s." % country_id)

class TourSerializerView(viewsets.ModelViewSet):
    serializer_class = TourSerializer
    queryset = Tour.objects.all()