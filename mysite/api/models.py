from django.db import models
from django.contrib.auth.models import User

class Video(models.Model):
    vimeo_id = models.BigIntegerField()
    video_name = models.CharField(max_length=100)
    description = models.CharField(max_length=500,default="")
    duration = models.BigIntegerField()
    category = models.CharField(max_length=100,default="")
    upload_date = models.DateTimeField(auto_now_add=True)
    video_path = models.CharField(max_length=300)
    thumbnail_path = models.CharField(max_length=300,default="")



