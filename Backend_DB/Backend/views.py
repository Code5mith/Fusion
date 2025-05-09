from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BaseAuthentication

from .serializers import cpi_db_serializer_usa as cpi_serializer
from .serializers import unemp_db_serializer as unemp_serializer
from .serializers import intrates_db_serializer_usa as intrate_serializer_usa
from .serializers import intrates_db_serializer_cad as intrate_serializer_cad
from .serializers import intrates_db_serializer_jpy as intrate_serializer_jpy
from .serializers import intrates_db_serializer_euro as intrate_serializer_euro

from .serializers import cpi_db_serializer_usa_yearmean as cpi_yearmean_serializer
from .serializers import Uemp_db_serializer_usa_yearmean as unemp_yearmean_serializer
from .serializers import intrates_db_serializer_usa_yearmean as intrates_yearmean_serializer_usa
from .serializers import intrates_db_serializer_cad_yearmean as intrates_yearmean_serializer_cad
from .serializers import intrates_db_serializer_euro_yearmean as intrates_yearmean_serializer_euro
from .serializers import intrates_db_serializer_jpy_yearmean as intrates_yearmean_serializer_jpy


from .models import Cpi_db_USA, Unemp_db_USA, IntRates_db_USA, IntRates_db_CAD, IntRates_db_EURO, IntRates_db_JPY
from .models import Cpi_db_USA_yearmean, IntRates_db_USA_yearmean, IntRates_db_CAD_yearmean, IntRates_db_EURO_yearmean, IntRates_db_JPY_yearmean, Unemp_db_USA_yearmean

from .utils.Funcs import Update_DB


import pandas as pa
from os.path import join, dirname

# MARK: Data file for cpi.
dataset_path = join(dirname(__file__), "data_set", "CPIAUCSL.csv")

# MARK: Data file for Umemployement.
dataset_path2 = join(dirname(__file__), "data_set", "UNRATE.csv")

# MARK: Data file for Interest Rates.
dataset_path3 = join(dirname(__file__), "data_set", "FEDFUNDSRATE.csv")
dataset_path4 = join(dirname(__file__), "data_set", "CADINTRATE.csv")
dataset_path5 = join(dirname(__file__), "data_set", "JPYINTRATE.csv")
dataset_path6 = join(dirname(__file__), "data_set", "EURO19INTRATE.csv")


# MARK: Update the database and return data


class Index(APIView):
    def get(self, request, year, page, country):

        if page == "cpi-page":
            match country:
                case "USA":
                    Update_DB(year, "CPIAUCSL", dataset_path,
                              Cpi_db_USA, Cpi_db_USA_yearmean)
                    sample_data = Cpi_db_USA.objects.filter(year=year)
                    serialized_data = cpi_serializer(sample_data, many=True)

        if page == "unemployement-page":
            match country:
                case "USA":
                    Update_DB(year, "UNRATE", dataset_path2,
                              Unemp_db_USA, Unemp_db_USA_yearmean)
                    sample_data = Unemp_db_USA.objects.filter(year=year)
                    serialized_data = unemp_serializer(sample_data, many=True)

        if page == "interest-rates":

            match country:

                case "USA":

                    Update_DB(year, "FEDFUNDS", dataset_path3,
                              IntRates_db_USA, IntRates_db_USA_yearmean)
                    sample_data = IntRates_db_USA.objects.filter(year=year)
                    serialized_data = intrate_serializer_usa(
                        sample_data, many=True)

                case "EURO":

                    Update_DB(year, "EURO19INTERESTRATE", dataset_path6,
                              IntRates_db_EURO, IntRates_db_EURO_yearmean)
                    sample_data = IntRates_db_EURO.objects.filter(year=year)
                    serialized_data = intrate_serializer_euro(
                        sample_data, many=True)

                case "JPY":

                    Update_DB(year, "JPYINTERESTRATE", dataset_path5,
                              IntRates_db_JPY, IntRates_db_JPY_yearmean)
                    sample_data = IntRates_db_JPY.objects.filter(year=year)
                    serialized_data = intrate_serializer_jpy(
                        sample_data, many=True)

                case "CAD":

                    Update_DB(year, "CADINTERESTRATE", dataset_path4,
                              IntRates_db_CAD, IntRates_db_CAD_yearmean)
                    sample_data = IntRates_db_CAD.objects.filter(year=year)
                    serialized_data = intrate_serializer_cad(
                        sample_data, many=True)

        return Response(serialized_data.data, status=status.HTTP_200_OK)


class YearMean(APIView):

    def get(self, request, country, page):

        if page == "cpi-page":

            match country:
                case "USA":
                    data = Cpi_db_USA_yearmean.objects.all()
                    serialized_data = cpi_yearmean_serializer(data, many=True)

        if page == "unemployement-page":

            match country:
                case "USA":
                    data = Unemp_db_USA_yearmean.objects.all()
                    serialized_data = unemp_yearmean_serializer(
                        data, many=True)

        if page == "interest-rates":

            match country:

                case "USA":  

                    data = IntRates_db_USA_yearmean.objects.all()
                    serialized_data = intrates_yearmean_serializer_usa(
                        data, many=True)

                case "EURO":

                    data = IntRates_db_EURO_yearmean.objects.all()
                    serialized_data = intrates_yearmean_serializer_euro(
                        data, many=True)

                case "CAD":

                    data = IntRates_db_CAD_yearmean.objects.all()
                    serialized_data = intrates_yearmean_serializer_cad(
                        data, many=True)

                case "JPY":

                    data = IntRates_db_JPY_yearmean.objects.all()
                    serialized_data = intrates_yearmean_serializer_jpy(
                        data, many=True)

        return Response(serialized_data.data, status=status.HTTP_200_OK)


def Hello(request):
    return render(request, "backend/index.html")

