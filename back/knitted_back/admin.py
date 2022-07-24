from django.contrib import admin

from .models import Category, Product

# from library_back.models import Book

# Register your models here.
admin.site.register(Category)
admin.site.register(Product)

# superuser username:theboss,email:the@boss.com,password:abc123