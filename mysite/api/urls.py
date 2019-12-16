from django.urls import path
from .views import *

urlpatterns = [
    path('get_videos/',get_videos),
    path('get_dash/',get_dash),
    path('create_video/',create_video),
    path('categories/',categories),
    path('video_details/<str:id>/',video_details)

]