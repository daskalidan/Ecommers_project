from rest_framework.response import Response
from rest_framework import generics
from rest_framework.decorators import api_view

from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Product
from .serializers import MyTokenObtainPairSerializer, ProductSerializer, RegisterSerializer

# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer      

@api_view(['GET'])
def all_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)