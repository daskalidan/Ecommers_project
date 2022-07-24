from . import views
from django.urls import path

urlpatterns = [
    path('home', views.home),
    path('latest-products/', views.LatestProductsList.as_view())
]
