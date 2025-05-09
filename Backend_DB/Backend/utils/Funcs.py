import pandas as pa


months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}


def GetYear(dataFile) :
   
    df =  pa.read_csv(dataFile)

    str_years = pa.to_datetime(df['DATE']).dt.year.astype(str)

    str_years = dict.fromkeys(str_years, 0)

    str_years = list(str_years.keys())

    return str_years

  
    """  try:
            # Read the CSV file into a pandas DataFrame
            df = pa.read_csv(dataFile)

            # Extract and convert year values to integers
            years = pa.to_datetime(df['DATE']).dt.year.astype(str).tolist()

            # cleaning duplicates
            years = dict.fromkeys(years, 0)

            years = list(years.keys())

            # Vectorized approach

            # Filter years greater than 1950 using list comprehension
            filtered_years = [y for y in years if int(y) > 1999]

            print(years)

            return filtered_years

        except FileNotFoundError:
            print(f"Error: File '{dataFile}' not found.")
            return []  # Handle potential file not found error

        except Exception as e:
            print(f"An unexpected error occurred: {e}")
            return []  # Handle other potential exceptions """

            


def Update_DB(year,ColumnName, dataFile, database, YearMean_DB=None):

    #database.objects.all().delete()

    #print("data is cleaned.")
    
    if len(database.objects.all()):
         
         print("database is up to date!", len(database.objects.all()), "rows found")

    else:
    #      print("Existing data found!", len(database.objects.all()))

        df =  pa.read_csv(dataFile)

        years = GetYear(dataFile)

        counter = 0

        #clean
        database.objects.all().delete()
        YearMean_DB.objects.all().delete()

        print("Proc DB clean success!")

        for year in years:
                
                data = df[pa.to_datetime(df["DATE"]).dt.year.astype(str) == year]

                if int(year) >= 2000:
                    
                    # Percent is calculated for cpi data.
                    YearMean = (((data[ColumnName].mean() - 100) * 100) / data[ColumnName].mean()) if ColumnName == "CPIAUCSL" else data[ColumnName].mean()

                    try:
                            yearmean_update = YearMean_DB(
                                
                                # MARK: Update the the year mean database.

                                year = year,
                                year_mean = YearMean
                            )

                            yearmean_update.save()

                            print(year, "Year-Mean DB updated success!")
                            
                    except Exception as e:
                            print("Year mean db was not updated successfully!", e)

                for count in range(len(data)):
                    data_row = df['DATE'][counter]
                    try:
                        #update
                        new_data = database(
                        year=year,
                        month=months[pa.to_datetime(data_row).month],
                        record_number=((data[ColumnName][counter] - 100) * 100) / data[ColumnName][counter] if ColumnName == "CPIAUCSL" else data[ColumnName][counter]
                        )
                        new_data.save()

                    except Exception as e:
                        print('An error has occured :', e)

                    counter +=1

                print(year, "data saved")

        print("DB has been updated successfully!")

