from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Category, Product
from .serializers import CategorySerializer, MyTokenObtainPairSerializer, ProductSerializer, RegisterSerializer

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

@api_view(['GET'])
def all_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)    


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_new_category(request):
    print(request.user)
    if request.user.is_staff == True:
        new_category_serializer = CategorySerializer(data=request.data)
        print(request.data)
        if new_category_serializer.is_valid():
            new_category_serializer.save()
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(new_category_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)


class Create_new_product(APIView):
    permission_classes = [IsAuthenticated]
    parser_class = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        print(request.user)
        print(request.data)
        if request.user.is_staff == True:
            new_product_serializer = ProductSerializer(data=request.data)
            if new_product_serializer.is_valid():  
                new_product_serializer.save()
                products = Product.objects.all()
                serializer = ProductSerializer(products, many=True)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print('error', new_product_serializer.errors)
                return Response(new_product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)