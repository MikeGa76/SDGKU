from django.contrib import admin
from .models import Genre, Movie, Games, GenreAdmin, MovieAdmin

# Register your models here.

admin.site.register(Games)

admin.site.register(Genre, GenreAdmin)
admin.site.register(Movie, MovieAdmin)