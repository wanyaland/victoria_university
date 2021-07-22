from django.db import models
from .choices import *

# Create your models here.


class Contact(models.Model):
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    whatsapp_number = models.CharField(max_length=255)
    alternative_number = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class GeneralInfo(models.Model):
    disability = models.CharField(max_length=5,choices=DISABILITY_CHOICES, default=NO)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.disability

class EducationLevel(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

class Programme(models.Model):
    name = models.CharField(max_length=255)
    level = models.ForeignKey(EducationLevel, on_delete=models.CASCADE, related_name="programmes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name


class Application(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=20)
    first_language = models.CharField(max_length=255)
    nationality = models.CharField(max_length=255, null=True)
    dob = models.DateTimeField()
    contact = models.ForeignKey(Contact, related_name='applications', on_delete=models.CASCADE, null=True)
    programme = models.ForeignKey(Programme, related_name="applications", on_delete=models.CASCADE, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return f"{self.first_name} {self.middle_name} {self.last_name}"

class EducationHistory(models.Model):
    education_level = models.ForeignKey(EducationLevel, on_delete=models.CASCADE, related_name="history")
    subject = models.CharField(max_length=255)
    institution_name = models.CharField(max_length=255)
    qualification = models.CharField(max_length=255)
    result = models.CharField(max_length=255)
    application = models.ForeignKey(Application, related_name="history", on_delete=models.CASCADE)
    year = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Document(models.Model):
    file = models.FileField(upload_to="documents")
    application = models.ForeignKey(Application, related_name="documents", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


