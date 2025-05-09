
const record_data = [];

export const yearList = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023, 2024];

  const monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  
export const updateData = (data, length) => {
  if(typeof data != "undefined" && record_data.length <= length){
     Object.keys(data).map((index, item) => {
          console.log(index)
          record_data.push(Number(data[item].record_number))})
}

console.log(record_data)
      
return record_data
}