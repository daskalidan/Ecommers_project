from rest_framework import serializers
from .models import Category, Product, Order, OrderItem 


class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = ('id', 'name', 'get_absolute_url', 'description', 'price', 'get_image', 'get_thumbnail')

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'get_absolute_url', 'products')


class OrderItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = OrderItem
        fields = ('price', 'product', 'quantity')


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    
    class Meta:
        model = Order
        fields = ('id', 'first_name', 'last_name', 'email', 'address', 'zipcode', 'place', 'phone', 'stripe_token', 'items')

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**items_data)

        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)

        return order    