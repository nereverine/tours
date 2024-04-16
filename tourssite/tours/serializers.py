from rest_framework import serializers
from .models import Tour
from django.contrib.auth.models import User


#MODEL SERIALIZERS
class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):  
    class Meta:
        model = User
        fields = '__all__'



#AUTHENTICATION SERIALIZERS
class LoginSerializer(serializers.Serializer):
    #email = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField()