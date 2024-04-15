from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
<<<<<<< Updated upstream
from .serializers import TourSerializer
from .models import Tour
=======
from django.contrib.auth.models import User, update_last_login
from .serializers import TourSerializer, UserSerializer, LoginSerializer, MyTokenObtainPairSerializer
from .models import Tour
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
>>>>>>> Stashed changes

# Create your views here.
def index(request):
    return HttpResponse("At Main Index")

def toursIndex(request):
    return HttpResponse("At Tours Index")

def countryDetail(request, country_id):
    return HttpResponse("You're looking at the country %s." % country_id)

class TourSerializerView(viewsets.ModelViewSet):
    serializer_class = TourSerializer
<<<<<<< Updated upstream
    queryset = Tour.objects.all()
=======
    queryset = Tour.objects.all()

class UserSerializerView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class LoginView(APIView):
    def post(self,request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            if user:
                #Authentication successful
                update_last_login(None, user)
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
            else:
                #Authentication failed
                return Response({"error":"Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            #Invalid request data
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    #permission_classes = (IsAuthenticated,)
    def post(self,request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
>>>>>>> Stashed changes
