from rest_framework_jwt.views import obtain_jwt_token
from django.contrib import admin
from django.conf.urls import include
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token-auth/',obtain_jwt_token),
    path('userapp/',include('userapp.urls')),
    path('api/',include('api.urls')),
]
