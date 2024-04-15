from rest_framework import serializers
from rest_framework_simplejwt.tokens import Token
from .models import Tour
<<<<<<< Updated upstream

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ('id', 'city_id', 'name', 'startDate', 'endDate')
=======
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

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

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls,user):
        token = super().get_token(user)
        token['username'] = user.username
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        return token
>>>>>>> Stashed changes
