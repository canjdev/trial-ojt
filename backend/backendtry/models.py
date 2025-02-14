from django.db import models

# Create your models here.
class Account(models.Model):
    user_name = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.user_name + ' ' + self.email + ' '