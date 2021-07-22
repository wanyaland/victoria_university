import pytest
from datetime import datetime

from applications.models import Application, Contact, GeneralInfo, EducationLevel, Programme, EducationHistory
from applications.choices import *



@pytest.mark.django_db
def test_application_model():
    level = EducationLevel (
        name = "bachelors"
    )
    level.save()
    programme = Programme(
        name="comp science",
        level=level
    )
    programme.save()
    application = Application(
        first_name="Harold",
        last_name="Wanyama",
        middle_name="Nachwera",
        gender="Male",
        dob=datetime(1981, 12, 3),
        nationality="Ugandan",
        first_language="English",
        programme=programme,
    )
    application.save()
    assert application.first_name == "Harold"
    assert application.last_name == "Wanyama"
    assert application.middle_name == "Nachwera"
    assert application.gender == "Male"
    assert application.dob == datetime(1981, 12, 3)
    assert application.nationality == "Ugandan"
    assert application.first_language == "English"
    assert application.created_at
    assert application.updated_at
    assert str(application) == "Harold Nachwera Wanyama"

@pytest.mark.django_db
def test_contact_model():
    contact = Contact(
        country = "Uganda",
        city = "Kampala",
        email = "wanyaland@gmail.com",
        whatsapp_number = "256788999982",
        alternative_number = "256788999982"
    )
    contact.save()
    assert contact.country == "Uganda"
    assert contact.city == "Kampala"
    assert contact.email == "wanyaland@gmail.com"
    assert contact.whatsapp_number == "256788999982"
    assert contact.alternative_number == "256788999982"
    assert contact.created_at
    assert contact.updated_at

@pytest.mark.django_db
def test_general_info_model():
    gen_info = GeneralInfo(
        disability = YES
    )
    gen_info.save()
    assert gen_info.disability == YES
    assert gen_info.created_at
    assert gen_info.updated_at

@pytest.mark.django_db
def test_level_of_education_model():
    level_of_education = EducationLevel(
        name="Bachelors",
    )
    level_of_education.save()
    assert level_of_education.name == "Bachelors"
    assert level_of_education.created_at
    assert level_of_education.updated_at

@pytest.mark.django_db
def test_programme_model():
    level = EducationLevel (
        name = "bachelors"
    )
    level.save()
    programme = Programme(
        name="comp science",
        level=level
    )
    programme.save()
    assert programme.name == "comp science"
    assert programme.level.name == "bachelors"
    assert programme.updated_at
    assert programme.created_at
    assert str(programme) == "comp science"

@pytest.mark.django_db
def test_education_history_model():
    level = EducationLevel (
        name = "bachelors"
    )
    level.save()
    programme = Programme(
        name="comp science",
        level=level
    )
    programme.save()
    application = Application(
        first_name="Harold",
        last_name="Wanyama",
        middle_name="Nachwera",
        gender="Male",
        dob=datetime(1981, 12, 3),
        nationality="Ugandan",
        first_language="English",
        programme=programme
    )
    application.save()
    history = EducationHistory(
        education_level = level,
        subject = "history",
        institution_name = "Mak",
        qualification = "certificate",
        result = "A plus",
        year = "1982",
        application = application
    )
    history.save()
    assert history.education_level == level
    assert history.subject == "history"
    assert history.institution_name == "Mak"
    assert history.qualification == "certificate"
    assert history.result == "A plus"
    assert history.year == "1982"
    assert history.application == application

