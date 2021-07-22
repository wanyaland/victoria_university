from django.db import models

# Create your models here.


class Application(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=20)
    first_language = models.CharField(max_length=255)
    nationality = models.CharField(max_length=255, null=True)
    dob = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.first_name} {self.middle_name} {self.last_name}"
