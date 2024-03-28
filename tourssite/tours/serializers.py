from rest_framework import serializers
from .models import Tour
from django.contrib.auth.models import User

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):  
    class Meta:
        model = User
        fields = '__all__'

   