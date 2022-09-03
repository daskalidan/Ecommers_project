
from django.db import models
from django.core.files import File
from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver

from PIL import Image
from io import BytesIO

# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(
        max_length=100, blank=False, null=False, default='unknown')

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            UserProfile.objects.create(user=instance)


    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.userprofile.save()

    def __str__(self):
        return self.user.username


class Category(models.Model):
    cat_name = models.CharField(
        max_length=100, blank=False, null=False, default='unknown')

    def __str__(self):
        return self.cat_name


class Product(models.Model):

    name = models.CharField(max_length=100, blank=False, null=False, default='unknown')
    description = models.TextField(max_length=1000, blank=False, null=False, default='unknown')
    price = models.DecimalField(max_digits=6, decimal_places=2, blank=False, null=False, default=99)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    image = models.ImageField(upload_to='uploads/', default='uploads/640px-Several_packages_of_yarn.jpg')
    thumbnail = models.ImageField(upload_to='uploads/', blank=True, null=True)

    def __str__(self):
        return self.name

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return 'http://127.0.0.1:8000' + self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()
                return 'http://127.0.0.1:8000' + self.thumbnail.url
            else:
                return ''

    def make_thumbnail(self, image, size=(300, 200)):
        img = Image.open(image)
        img.convert('RGB')
        img.thumbnail(size)

        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)

        thumbnail = File(thumb_io, name=image.name)
        return thumbnail
