from . import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('home', views.home),
    path('latest-products/', views.LatestProductsList.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
