"""
URL configuration for tourssite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from tours import views
from rest_framework_simplejwt import views as jwt_views




router = routers.DefaultRouter()
router.register(r'tours', views.TourSerializerView, 'tours')
router.register(r'users', views.UserSerializerView, 'users')
urlpatterns = [
    path("", views.index, name="index"),
    #path("tours/", include("tours.urls")),
    path("admin/", admin.site.urls),
    path('api/', include(router.urls)),
    path("__debug__/", include("debug_toolbar.urls")),
    path("api/login/", views.LoginView.as_view(), name='login'),
    path("api/logout/", views.LogoutView.as_view(), name="logout"),
    path("api/user/", views.user_list, name="user-list"),
    path('api/register/', views.register_user, name="register_user"),
    path('token/', views.MyTokenObtainPairView.as_view(),name ='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),name ='token_refresh'),
    path('tours/', views.userTours, name="userTours"),
]

admin.site.site_header = "Tours Administration"