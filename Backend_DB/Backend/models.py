from django.db import models

# Create your models here.

class Cpi_db_USA(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(default=0)
    month = models.CharField(max_length=10, default='')
    record_number = models.DecimalField(max_digits=8,decimal_places=4, default=0.00)

# Cpi data is available for the USA only 

class Cpi_db_USA_yearmean(models.Model):
    year = models.IntegerField(default=0)
    year_mean = models.IntegerField(default=0)

# MARK: unemp DB

class Unemp_db_USA(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(default=0)
    month = models.CharField(max_length=10, default='')
    record_number = models.DecimalField(max_digits=8,decimal_places=4, default=0.00)

class Unemp_db_USA_yearmean(models.Model):
    year = models.IntegerField(default=0)
    year_mean = models.IntegerField(default=0)

# MARK: IntRate DB


# MARK: USA

class IntRates_db_USA(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(default=0)
    month = models.CharField(max_length=10, default='')
    record_number = models.DecimalField(max_digits=8,decimal_places=4, default=0.00)


class IntRates_db_USA_yearmean(models.Model):
    year = models.IntegerField(default=0)
    year_mean = models.IntegerField(default=0)


# MARK: CAD

class IntRates_db_CAD(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(default=0)
    month = models.CharField(max_length=10, default='')
    record_number = models.DecimalField(max_digits=8,decimal_places=4, default=0.00)



class IntRates_db_CAD_yearmean(models.Model):
    year = models.IntegerField(default=0)
    year_mean = models.IntegerField(default=0)


# MARK: JPY

class IntRates_db_JPY(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(default=0)
    month = models.CharField(max_length=10, default='')
    record_number = models.DecimalField(max_digits=8,decimal_places=4, default=0.00)


class IntRates_db_JPY_yearmean(models.Model):
    year = models.IntegerField(default=0)
    year_mean = models.IntegerField(default=0)


#MARK: EURO

class IntRates_db_EURO(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(default=0)
    month = models.CharField(max_length=10, default='')
    record_number = models.DecimalField(max_digits=8,decimal_places=4, default=0.00)


class IntRates_db_EURO_yearmean(models.Model):
    year = models.IntegerField(default=0)
    year_mean = models.IntegerField(default=0)


