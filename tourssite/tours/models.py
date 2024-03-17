from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Continent(models.Model):
    class Meta:
        db_table = 'continent'
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Country(models.Model):
    class Meta:
        db_table = 'country'
        verbose_name_plural = 'Countries'
    name = models.CharField(max_length=255)
    continendId = models.ForeignKey(Continent, on_delete=models.CASCADE, db_column="continent_id")
    language = models.CharField(max_length=255)
    currency = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class City(models.Model):
    class Meta:
        db_table = 'city'
        verbose_name_plural = 'Cities'
    countryId = models.ForeignKey(Country, on_delete=models.CASCADE, db_column="country_id")
    name = models.CharField(max_length=255)
    isCapital = models.BooleanField()
    def __str__(self):
        return self.name

class Poi(models.Model):
    class Meta:
        db_table = 'poi'
    cityId = models.ForeignKey(City, on_delete=models.CASCADE, db_column="city_id")
    poiType = models.ForeignKey("PoiType", on_delete=models.CASCADE, db_column="poi_type") #since it doesnt exist yet, we have to use double quotes
    def __str__(self): #get the name of the poi by checking in the PoiDetails model
        for i in PoiDetails.objects.all():
            if i.poiId == self.pk:
                return str(i.name)
    #def __str__(self):
     #   return str(self.cityId)

class PoiDetails(models.Model):
    class Meta:
        db_table = 'poiDetails'
        verbose_name_plural = 'Pois Details'
    poiId = models.ForeignKey(Poi, on_delete=models.CASCADE, db_column="poi_id")
    name = models.CharField(max_length=255)
    description = models.TextField()
    foundingYear = models.IntegerField()
    coordLat = models.DecimalField(max_digits=8, decimal_places=6, db_column="coord_lat")
    coordLong = models.DecimalField(max_digits=9, decimal_places=6, db_column="coord_long")
    def __str__(self):
        return self.name

class TourUsers(models.Model):
    class Meta:
        db_table = 'tourUsers'
        verbose_name_plural = 'Tour Users'
    tourId = models.ForeignKey("Tour", on_delete=models.CASCADE, db_column="tourId")
    userId = models.ForeignKey(User, on_delete=models.CASCADE, db_column="userId")


class Tour(models.Model):
    class Meta:
        db_table = 'tour'
    cityId = models.ForeignKey(City, on_delete=models.CASCADE, db_column="city_id")
    name = models.CharField(max_length=255)
    startDate = models.DateField()
    endDate = models.DateField()
    def __str__(self):
        return self.name

class TourPoi(models.Model):
    class Meta:
        db_table = 'tourPoi'
    tourId = models.ForeignKey(Tour, on_delete=models.CASCADE, db_column="tour_id")
    poiId = models.ForeignKey(Poi, on_delete=models.CASCADE, db_column="poi_id")
    def __str__(self): #get the name of the poi by checking in the PoiDetails model
        for i in PoiDetails.objects.all():
            if i.poiId == self.poiId:
                return str(i.name)

class poiType(models.Model):
    class Meta:
        db_table = 'poiType'  
    #a Poi can be the following types:
    POI_TYPES = [
        ("street", "Street"),
        ("museum", "Museum"),
        ("hotel", "Hotel"),
        ("castle", "Castle"),
        ("square", "Square"),
        ("market", "Market"),
        ("church", "Church"),
        ("transportation", "Transportation"),
        ("monument", "Monument"),
    ]
    name = models.CharField(max_length=255, choices=POI_TYPES)
    description = models.TextField()
    def __str__(self):
        return self.name

