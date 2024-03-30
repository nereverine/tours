from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import TourSerializer, UserSerializer, LoginSerializer
from .models import Tour
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import BadRequest

# Create your views here.
def index(request):
    return HttpResponse("At Main Index")

def toursIndex(request):
    return HttpResponse("At Tours Index")

def countryDetail(request, country_id):
    return HttpResponse("You're looking at the country %s." % country_id)

def user_list(request):
    if request.method == 'GET':
        username = request.GET.get('username') #Get the username
        email = request.GET.get('email') #Get the email
        if username:
            #Filter users by username
            users = User.objects.filter(username__iexact=username)
            data = [{'id': user.id,'password':user.password, 'last_login':user.last_login, 'is_superuser': user.is_superuser, 'username': user.username, 'first_name': user.first_name, 'last_name': user.last_name , 'email': user.email, 'is_staff':user.is_staff, 'is_active':user.is_active, 'date_joined':user.date_joined} for user in users]
            return JsonResponse(data, safe=False)
        if email:
            #Filter users by email
            users = User.objects.filter(email__iexact=email)
            data = [{'id': user.id,'password':user.password, 'last_login':user.last_login, 'is_superuser': user.is_superuser, 'username': user.username, 'first_name': user.first_name, 'last_name': user.last_name , 'email': user.email, 'is_staff':user.is_staff, 'is_active':user.is_active, 'date_joined':user.date_joined} for user in users]
            return JsonResponse(data, safe=False)
    
    

class TourSerializerView(viewsets.ModelViewSet):
    serializer_class = TourSerializer
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
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
            else:
                #Authentication failed
                return Response({"error":"Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            #Invalid request data
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

