from rest_framework import serializers
from .models import Tour
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

class MyTokenObtainPariSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        return token