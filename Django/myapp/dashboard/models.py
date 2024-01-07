from django.db import models
from db_connection import db

# Create your models here.
projects_collection = db["Project"]

posts_collection = db["Post"]