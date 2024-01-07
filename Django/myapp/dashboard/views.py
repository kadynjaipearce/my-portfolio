from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.db import models
from .models import posts_collection, projects_collection
import json
from bson import ObjectId
from datetime import datetime

class project:
  def __init__(self, slug, img, title, body, githubUrl, websiteUrl):
    self.slug = slug
    self.img = img
    self.title = title
    self.body = body
    self.githubUrl = githubUrl
    self.websiteUrl = websiteUrl
    self.createdAt = datetime.utcnow()

# Create your views here.
def dashboard(request):
  return HttpResponse("<h1>Welcome to the dashboard: Kadyn</h1>")

def add_project(request):
  records = project()
  projects_collection.insert_one(records.__dict__)
  return HttpResponse("New Person Added")

def update_field(request):
   projects_collection.update_one()

def json_encoder(obj):
    if isinstance(obj, (ObjectId, datetime)):
        return str(obj)
    raise TypeError("Object of type {} is not JSON serializable".format(type(obj)))

def get_projects(request):
    projects = list(projects_collection.find())

    # Convert MongoDB documents to a list of dictionaries
    project_list = [project for project in projects]

    # Convert the list to a JSON string using the custom encoder
    projects_json = json.dumps(project_list, default=json_encoder)

    # Return JSON response
    return HttpResponse(project_list)