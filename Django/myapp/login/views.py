from django.shortcuts import render, HttpResponse

def login(request):
    if (request.user.is_authenticated):
      return render(request, "base.html", {})
    else:
        return HttpResponse("You are not logged in. Please log in to access this content.")
