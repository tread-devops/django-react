from django.http import HttpResponseRedirect,HttpResponse,JsonResponse
import requests
from django.contrib.auth.models import User
from rest_framework import permissions,status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
import os
import math
from .models import *

def get_videos(req): 
    headers = {'Authorization' : 'bearer 4bc1fa750718b61a2d15ce0b93812fcd'}
    response = requests.get('https://api.vimeo.com/channels/1522179/videos',headers=headers)
    
    
    details = {
        'data': []
    }
    for data in response.json['data']:
        duration=data['duration']
        v_link=data['link']
        image_link=data['pictures']['sizes'][9]['link']
        videoname = data['name']
        vtmp = data['uri'].split('/')[2]

        time=""
        sec = duration % 60
        min = math.floor(duration / 60) 
        hours="00"
        if(min > 59):
            min=duration % 60
            hours = math.floor(duration / 60)
        time = str(hours)+":"+str(min)+":"+str(sec)

        tmp = {
            'v_link' : v_link,
            'duration' : time,
            'image_link' : image_link,
            'videoname' : videoname,
            'videoid' : vtmp

        }
        details['data'].append(tmp)
    return JsonResponse(details)

def get_dash(req):
    headers = {'Authorization' : 'bearer 4bc1fa750718b61a2d15ce0b93812fcd'}
    response = requests.get('http://player.vimeo.com/video/379446812/config',headers=headers)
    return JsonResponse(response.json) 

@csrf_exempt
@require_http_methods(["POST"])
def create_video(req):
    if req.method == 'POST':
        body = json.loads(req.body)
        duration = body['duration']
        video_name = body['videoName']
        category = body['category']
        vimeo_id = body['vimeo_id']
        video_path = "https://vimeo.com/"+vimeo_id
        
        headers = {'Authorization' : 'bearer 4bc1fa750718b61a2d15ce0b93812fcd'}
        response = requests.get("http://player.vimeo.com/video/"+vimeo_id+"/config",headers=headers)
        #print(response.json)
        try:
            thumbnail_path = response.json['video']['thumbs']['1280']
        except:
            thumbnail_path = response.json['video']['thumbs']['960']
        

        V = Video.objects.create(vimeo_id = vimeo_id,video_name=video_name,description = "" ,duration=int(duration),
                category=category,video_path=video_path,thumbnail_path=thumbnail_path)
        if V is not None:
            details = {
                'status' : 'created'
            }
            return JsonResponse(details)
        else:
            details = {
                'status' : 'error'
            }
            return JsonResponse(details)

@csrf_exempt
@require_http_methods(['GET'])
def categories(req):
    if req.method == 'GET':
        category = list(Video.objects.order_by().values('category').distinct())
        return JsonResponse(category , safe=False)

@csrf_exempt
@require_http_methods(['GET'])
def video_details(req,id):
    if req.method == 'GET':
        video_id = int(id)
        print(video_id)
        data = list(Video.objects.filter(vimeo_id=video_id).values())
        suggest = list(Video.objects.exclude(vimeo_id=video_id).values())
        print(data)

        results = {
            'results' : data,
            'suggest' : suggest
        }
        return JsonResponse(results)






        
