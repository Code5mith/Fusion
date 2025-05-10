# Fusion 

## Economic Data Visualizer (Django + React)Project Description

![Screenshot 2025-05-10 134710](https://github.com/user-attachments/assets/064d0e17-3244-479a-8dc3-eafad57eae61)

This project is a web application designed to provide interactive data visualizations for key economic indicators across major global economies. The application is structured with a Django backend, responsible for data handling, API provision, and a React frontend, which consumes the API to render dynamic and interactive charts and graphs.

The initial focus of this application is on visualizing Consumer Price Index (CPI) and unemployment rate data for four significant economic regions: the United States, the European Union, Japan, and the Canada.

This repository contains the first working version of the application. It demonstrates the core functionality of fetching data from the backend API and presenting it visually on the frontend. The project is currently under active development, with plans to expand data sources, enhance visualization options, improve user interface/experience and fixing Bugs. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Python 3.8+
* Node.js (LTS version recommended)
* npm or yarn (npm is installed with Node.js)
* Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Code5mith/Fusion
    cd Fusion # Adjust to your cloned folder name
    ```

2.  **Set up the Django Backend:**

    Navigate into the backend directory...

    ```bash
    cd Fusion/Backend # Adjust if your backend folder has a different name
    ```
    Install python Dependancies.
    
     ```bash
    pip install requirments.txt 
    ```
     Run django Dev server
    
      ```bash
    python3 manage.py runserver
    ```

4.  **Set up the React Frontend:**

     Navigate into the frontend directory...

    ```bash
    cd Fusion/Frontend # Adjust if your backend folder has a different name
    ```
    Install react Dependancies.
    
     ```bash
    npm install
    ```
     Run dev server
    
      ```bash
    npm run dev
    ```
