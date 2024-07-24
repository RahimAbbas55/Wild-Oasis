Readme:
# Wild-Oasis React + Vite Application

Hello everyone, 

This is a cabin management SPA(single-page application) built in React JS using Vite as a build environment. This application basically keeps track of all the cabins available to be rented out to customers, displays the bookings, check in or check out the customer along with confirming their arrival.

There are 6 main pages to this application. The names of the pages and their functionalities are described below:

## -> Dashboard:

  This page basically provides an overview of the application like displaying charts and graphs of the statistics of the application with 3 filters:
  
  => Last 7 days.

  => Last 30 days.

  => Last 90 days.

  By selecting any of this filter, the total earnings, check ins, check outs, occupancy percentage of the cabins, new arriving customers, about to leave customers will be   
  displayed on the screen with visually appealing user interface.

## -> Bookings:

  In this page, the bookings of each customer along with their status will be displayed in a tabular manner. The user currently logged in the application can either check in the customer or check out the customer or either delete the booking. There is also a bookings confirm page where the details of specific customer will be displayed and the user can check them in.

## -> Cabins:

  In this page, the cabin information is present. The information present consists of cabin image, cabin capacity, price of the cabin and discount on the cabin(if any). The user logged in can either delete the cabin, create a cabin, edit a cabin or duplicate a cabin.(CRUD Functionalities)

## -> Create New User: 

  This page funcations as a signup for new users who will manage the booking states of the customers for them soo that they can get a seamless experience.

## -> Settings:

  Here, the user can alter/modify the settings of the cabins to their choice. These settings includes:

  => Minimum nights per booking.

  => Maximum nights per booking.

  => Maximum guests per booking.

  => Breakfast price.

## -> Update User: 

  In this page, the currently logged in user can update their profile avatar, current name and password. All of these updated states will be stored in a database that will be discussed further.


# Data Management:

The data management and storage in this application is done by using an online database known as "***Supabase***". Supabase allows user to experience a seamless and easy to understand database systems along with authorization options and techniques. Moreover, supabase is a relational database which allows users to use the values and fields of one table into another without any issues or deteriments.

# Technology Used:

The technologies/techniques used are:

-> React JS(Front-End)

  => Hooks.(useState, useEffect, useRef, useMutation, useParams, useQuery)

  => React Query.

  => Redux Toolkit.

-> Vite(Build tool)


# How to setup the project?🤔

-> Clone the repository or download it and open in your IDE.

<= Make sure to have "***NodeJS***" installed in your system or you can not run the project!=>

-> Write "***npm i***" to download the necessary node modules for the project.

-> Download following node dependencies:

  => React Query.

  => React Query Devtools(for error handling and better understanding)

  => Toast.

  => React Charts.

  => Supabase.

  => Date-Fns.

  -> Once all these dependencies are installed, create your supabase account and get your API key.

  -> Replace your key in the following file : /src/services/supabase.js

-> Head over to supabase dashboard and create 4 tables:

  => Guests. (fullName, emailAddress, nationality ,nationalID ,countryFlag)

  => Bookings.(startDate, endDate, cabinId, guestId, hasBreakfast, observations, isPaid, noOfGuests)

  => Settings.(minBookingLength , maxBookingLength, maxGuestsPerBooking, breakastPrice)

  => Cabins.(name, maxCapacity, regularPrice, discount, image, description)

  ⭐️ Make sure that the fields and table name are the same or else the application will run into errors!

-> After doing all the steps correctly, simply run the command "***npm run dev***" in your terminal and viola application will start running.

-> When the application opens in your browser, upload the sample data from the button in the sidebar to easily upload the dummy data into the database for a more better experience.

# Project Images:

## 💡 Light Mode Images: 

-> Login

<img width="1440" alt="Login" src="https://github.com/user-attachments/assets/277f8040-a210-4952-a0ea-88739b5affe3">

-> Dashboard:

<img width="1440" alt="dashboard" src="https://github.com/user-attachments/assets/c867a82a-50e6-4abe-85c1-999365c63e06">

<img width="1439" alt="dashbord2" src="https://github.com/user-attachments/assets/40a9f938-919d-46a6-998c-f7bcef480ef6">

-> Bookings: 

<img width="1440" alt="booking1" src="https://github.com/user-attachments/assets/5855b1d8-6582-4eee-aeb9-b123429d898d">

<img width="1440" alt="booking2" src="https://github.com/user-attachments/assets/daf30953-9d19-4530-82bb-2d27af099db7">

-> Cabins:

<img width="1440" alt="cabin" src="https://github.com/user-attachments/assets/5ccae213-b5f3-4fa5-aada-a67e3d71002e">

<img width="1440" alt="create_cabin" src="https://github.com/user-attachments/assets/4436a31b-4a28-411b-bfa4-66acadd3efa5">

-> Create new user:

<img width="1440" alt="create_user" src="https://github.com/user-attachments/assets/0d91b014-9b20-4718-8f90-3aca0c025cba">

-> Settings

<img width="1440" alt="settings" src="https://github.com/user-attachments/assets/a3d73ca2-da6a-4fc0-ac08-ef5179f35cec">

-> Update User:

<img width="1440" alt="update_user" src="https://github.com/user-attachments/assets/b969f6d1-4c8f-4021-bb6a-b57527734776">


## ⚫️ Dark Mode Images: 

-> Login

<img width="1440" alt="login" src="https://github.com/user-attachments/assets/29f29a26-78e1-4bba-9ecf-8df1cc937cca">

-> Dashboard:

<img width="1440" alt="dashboard" src="https://github.com/user-attachments/assets/49366d91-02a9-48f6-bc06-3302ccc75e35">

-> Bookings: 

<img width="1440" alt="bookings1" src="https://github.com/user-attachments/assets/7145ba0c-517e-41ce-a437-272d818ea965">

<img width="1440" alt="bookings2" src="https://github.com/user-attachments/assets/f177aba3-54a4-4e4c-9df3-6731c35e72fd">

-> Cabins:

<img width="1440" alt="Cabin" src="https://github.com/user-attachments/assets/54a98337-1ae6-45f2-a07b-ba23e67912c1">

<img width="1439" alt="create_cabin" src="https://github.com/user-attachments/assets/dfe873a8-6758-4d9f-8a94-b2cd24522d33">

-> Create new user:

<img width="1439" alt="create_user_dark" src="https://github.com/user-attachments/assets/29610a13-619b-4ffc-913b-3a3701b01683">

-> Settings:

<img width="1440" alt="settings" src="https://github.com/user-attachments/assets/ec18b32f-9939-4205-8383-0f0852e2d2de">

-> Update User:

<img width="1439" alt="update_user" src="https://github.com/user-attachments/assets/2d19171d-d463-4abe-a86f-5b826698606b">


# Note:

Feel free to use the project and in case of any issues or queries, contact me using my socials in my bio.

Happy coding😊
