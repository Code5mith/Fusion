from rest_framework import serializers
from .models import Cpi_db_USA ,Unemp_db_USA, IntRates_db_USA, IntRates_db_CAD, IntRates_db_EURO, IntRates_db_JPY
from .models import Cpi_db_USA_yearmean, IntRates_db_USA_yearmean, IntRates_db_CAD_yearmean, IntRates_db_EURO_yearmean, IntRates_db_JPY_yearmean, Unemp_db_USA_yearmean

# serialize our model to a json 

fields =  ('year', 'month', 'record_number')
year_mean_fields = ('year','year_mean')

class cpi_db_serializer_usa(serializers.ModelSerializer):
    
    class Meta:
        model = Cpi_db_USA
        fields = fields

class cpi_db_serializer_usa_yearmean(serializers.ModelSerializer):

    class Meta:
        model = Cpi_db_USA_yearmean
        fields = year_mean_fields


# MARK: Serializer for umemp model

class unemp_db_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = Unemp_db_USA
        fields = fields


class Uemp_db_serializer_usa_yearmean(serializers.ModelSerializer):

    class Meta:
        model = Unemp_db_USA_yearmean
        fields = year_mean_fields


# MARK: Serializer for Interest rate models


# MARK: USA

class intrates_db_serializer_usa(serializers.ModelSerializer):
    
    class Meta:
        model = IntRates_db_USA
        fields = fields

class intrates_db_serializer_usa_yearmean(serializers.ModelSerializer):

    class Meta:
        model = IntRates_db_USA_yearmean
        fields = year_mean_fields

# MARK: CAD

class intrates_db_serializer_cad(serializers.ModelSerializer):
    
    class Meta:
        model = IntRates_db_CAD
        fields = fields

class intrates_db_serializer_cad_yearmean(serializers.ModelSerializer):

    class Meta:
        model = IntRates_db_CAD_yearmean
        fields = year_mean_fields


# MARK: JPY

class intrates_db_serializer_jpy(serializers.ModelSerializer):
    
    class Meta:
        model = IntRates_db_JPY
        fields = fields

class intrates_db_serializer_jpy_yearmean(serializers.ModelSerializer):

    class Meta:
        model = IntRates_db_JPY_yearmean
        fields = year_mean_fields

# MARK: EURO

class intrates_db_serializer_euro(serializers.ModelSerializer):
    
    class Meta:
        model = IntRates_db_EURO
        fields = fields

class intrates_db_serializer_euro_yearmean(serializers.ModelSerializer):

    class Meta:
        model = IntRates_db_EURO_yearmean
        fields = year_mean_fields

