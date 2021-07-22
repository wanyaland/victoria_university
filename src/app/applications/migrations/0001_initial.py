# Generated by Django 3.0.5 on 2021-07-22 22:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Application",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("first_name", models.CharField(max_length=255)),
                ("last_name", models.CharField(max_length=255)),
                ("middle_name", models.CharField(max_length=255)),
                ("gender", models.CharField(max_length=20)),
                ("first_language", models.CharField(max_length=255)),
                ("nationality", models.CharField(max_length=255, null=True)),
                ("dob", models.DateTimeField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Contact",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("country", models.CharField(max_length=255)),
                ("city", models.CharField(max_length=255)),
                ("email", models.CharField(max_length=255)),
                ("whatsapp_number", models.CharField(max_length=255)),
                ("alternative_number", models.CharField(max_length=255)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="EducationLevel",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=255)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Faculty",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="GeneralInfo",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("disability", models.CharField(choices=[("YES", "yes"), ("NO", "no")], default="NO", max_length=5)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Programme",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=255)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
                (
                    "faculty",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name="programmes", to="applications.Faculty"
                    ),
                ),
                (
                    "level",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="programmes",
                        to="applications.EducationLevel",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="EducationHistory",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("subject", models.CharField(max_length=255)),
                ("institution_name", models.CharField(max_length=255)),
                ("qualification", models.CharField(max_length=255)),
                ("result", models.CharField(max_length=255)),
                ("year", models.CharField(max_length=255)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
                (
                    "application",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name="history", to="applications.Application"
                    ),
                ),
                (
                    "education_level",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name="history", to="applications.EducationLevel"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Document",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("file", models.FileField(upload_to="documents")),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
                (
                    "application",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name="documents", to="applications.Application"
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="application",
            name="contact",
            field=models.ForeignKey(
                null=True, on_delete=django.db.models.deletion.CASCADE, related_name="applications", to="applications.Contact"
            ),
        ),
        migrations.AddField(
            model_name="application",
            name="programme",
            field=models.ForeignKey(
                blank=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="applications",
                to="applications.Programme",
            ),
        ),
    ]
