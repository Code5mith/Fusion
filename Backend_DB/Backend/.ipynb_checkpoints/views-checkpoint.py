from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from django.core.management import call_command

from .serializers import cpi_db_serializer_usa as serializer
from .serializers import unemp_db_serializer as unemp_serializer
from .serializers import intrates_db_serializer_usa as intrate_serializer_usa
from .serializers import intrates_db_serializer_cad as intrate_serializer_cad
from .serializers import intrates_db_serializer_jpy as intrate_serializer_jpy
from .serializers import intrates_db_serializer_euro as intrate_serializer_euro

from .models import Cpi_db_USA, Unemp_db_USA, IntRates_db_USA, IntRates_db_CAD, IntRates_db_EURO, IntRates_db_JPY

from .utils.Funcs import Update_DB

import pandas as pa
from os.path import join, dirname

dataset_path = join(dirname(__file__), "data_set", "CPIAUCSL.csv")
dataset_path2 = join(dirname(__file__), "data_set", "UNRATE.csv")
dataset_path3 = join(dirname(__file__), "data_set", "FEDFUNDSRATE.csv")
dataset_path4 = join(dirname(__file__), "data_set", "CADINTRATE.csv")
dataset_path5 = join(dirname(__file__), "data_set", "JPYINTRATE.csv")
dataset_path6 = join(dirname(__file__), "data_set", "EURO19INTRATE.csv")

yearMean: dict = {}

# Update the database and return data 
    
class Index(APIView):
    def get(self, request, year, page, country):
        
        if page == "cpi-page":
            Update_DB(year,"CPIAUCSL",yearMean,dataset_path, Cpi_db_USA)
            sample_data = Cpi_db_USA.objects.filter(year=year)
            serialized_data = serializer(sample_data, many=True)

        if page == "unemployement-page":
            Update_DB(year,"UNRATE",yearMean,dataset_path2, Unemp_db_USA)
            sample_data = Unemp_db_USA.objects.filter(year=year)
            serialized_data = unemp_serializer(sample_data, many=True)

        if page == "interest-rates":
            
            match country: 

                case "USA":

                    Update_DB(year,"FEDFUNDS",yearMean,dataset_path3, IntRates_db_USA)
                    sample_data = IntRates_db_USA.objects.filter(year=year)
                    serialized_data = intrate_serializer_usa(sample_data, many=True)

                
                case "EURO":

                    Update_DB(year,"EURO19INTERESTRATE",yearMean,dataset_path6, IntRates_db_EURO)
                    sample_data = IntRates_db_EURO.objects.filter(year=year)
                    serialized_data = intrate_serializer_euro(sample_data, many=True)

                
                case "JPY":

                    Update_DB(year,"JPYINTERESTRATE",yearMean,dataset_path5, IntRates_db_JPY)
                    sample_data = IntRates_db_JPY.objects.filter(year=year)
                    serialized_data = intrate_serializer_jpy(sample_data, many=True)

                
                case "CAD":

                    Update_DB(year,"CADINTERESTRATE",yearMean,dataset_path4, IntRates_db_CAD)
                    sample_data = IntRates_db_CAD.objects.filter(year=year)
                    serialized_data = intrate_serializer_cad(sample_data, many=True)



        return Response(serialized_data.data, status=status.HTTP_200_OK)

class YearMean(APIView):
    def get(self, request):
       
       return Response(yearMean, status=status.HTTP_200_OK)


def Hello(request):
    return render(request, "backend/index.html")
