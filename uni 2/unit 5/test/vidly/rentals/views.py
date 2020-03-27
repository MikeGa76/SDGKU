from django.shortcuts import render
from .models import Movie

# Create your views here.
from django.http import HttpResponse

def index(request):
    # return HttpResponse("Hello")
    my_dict = {"insert_me": "I am from view.py"}
    return render(request, 'views/index.html', context=my_dict)

def test(request):
    test_string = {"insert_me": "test file from view.py"}
    movies = Movie.objects.all()
    return render(request, 'views/test.html', context=test_string)

# CRUD
#from .models import Movie

#Movie.objects.all()

#Movie.objects.filter(release_year=1994)

#Movie.objects.get(id#1)


# {% for movie in movies %}
#     th> {{movie.id}}

def index(request):
    movies = Movie.objects.all()
    return render(request, 'views/index.html', { 'movies': movies} )

def details(request, movie_id):
    movie = Movie.objects.get(id=movie_id)
    return render(request, 'views/details.html', { 'movie': movie} )