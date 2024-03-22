from django.contrib import admin
from django.utils.html import format_html
from .models import *

# Register your models here.
admin.site.register(Continent)
admin.site.register(Country)
admin.site.register(City)

#@admin.register(Poi)
class PoiDetailInline(admin.StackedInline):
    model = PoiDetails
    extra = 0
class PoiAdmin(admin.ModelAdmin):
    list_display = ["showPoiName", "cityId", "poiType", "showCountryName"]
    def showPoiName(self,obj):
        name = PoiDetails.objects.get(poiId=obj.pk).name
        return format_html("<b><i>{}</i></b>", name)
    showPoiName.short_description = "Poi Name"

    def showCountryName(self,obj):
        countryName = City.objects.get(pk=obj.cityId_id).countryId
        return countryName
    showCountryName.short_description = "Country"
    fields = ["cityId", "poiType"]
    inlines = [PoiDetailInline]

admin.site.register(Poi,PoiAdmin)


admin.site.register(poiType)

class TourPoiInline(admin.StackedInline):
    model = TourPoi
    extra = 0

class TourUsersInline(admin.StackedInline):
    model = TourUsers
    extra = 0
class TourAdmin(admin.ModelAdmin):
    list_display = ["name", "cityId", "showCountryName"]
    def showCountryName(self,obj):
        countryName = Country.objects.get(city=obj.cityId).name
        return countryName
    showCountryName.short_description = "Country"
    inlines = [TourPoiInline, TourUsersInline]
    def get_formsets_with_inlines(self, request, obj=None):
        """
        Return a list of all InlineFormsets for the given `obj` instance.
        """
        for inline in self.get_inline_instances(request, obj):
            if isinstance(inline, TourPoiInline):
                if obj is not None:  # obj will be None on the add view
                    inline.cityId_id = obj.cityId_id
            yield inline.get_formset(request, obj), inline

admin.site.register(Tour, TourAdmin)
