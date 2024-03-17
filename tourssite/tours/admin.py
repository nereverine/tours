from django.contrib import admin

from .models import *

# Register your models here.
admin.site.register(Continent)
admin.site.register(Country)
admin.site.register(City)
admin.site.register(Poi)
admin.site.register(PoiDetails)
admin.site.register(poiType)
admin.site.register(Tour)
#admin.site.register(TourPoi)
admin.site.register(TourUsers)