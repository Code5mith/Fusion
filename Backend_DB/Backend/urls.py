from django.urls import path
from .views import Index, Hello, YearMean

urlpatterns = [
    path("<str:page>/<str:country>/<int:year>/", Index.as_view(), name="index"),
    path("<str:page>/<str:country>/year-mean", YearMean.as_view(), name="year-mean"),
    path("hello", Hello)
]
