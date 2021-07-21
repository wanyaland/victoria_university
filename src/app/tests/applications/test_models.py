import pytest

from applications.models import Application

@pytest.mark.django_db
def test_application_model():
    application = Application(
        
    )