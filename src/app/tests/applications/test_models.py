import pytest
from datetime import datetime

from applications.models import Application


@pytest.mark.django_db
def test_application_model():
    application = Application(
        first_name="Harold",
        last_name="Wanyama",
        middle_name="Nachwera",
        gender="Male",
        dob=datetime(1981, 12, 3),
        nationality="Ugandan",
        first_language="English",
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
