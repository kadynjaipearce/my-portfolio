from django.urls import path
from . import views

urlpatterns = [
  path("", views.dashboard, name="Dashboard"),
  path("add/", views.add_project),
  path("show/", views.get_projects)
]