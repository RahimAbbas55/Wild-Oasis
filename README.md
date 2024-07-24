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

<img width="1440" alt="Login" src="https://github.com/user-attachments/assets/5d381c31-2280-4e57-9926-5e2c60700d5c">

-> Dashboard:

<img width="1440" alt="dashboard" src="https://github.com/user-attachments/assets/04331a9f-84f1-48e9-b5b8-80e7763ce77e">

<img width="1439" alt="dashbord2" src="https://github.com/user-attachments/assets/6d47dfbd-31de-4855-9aa1-828f748b79f8">

-> Bookings: 

<img width="1440" alt="booking1" src="https://github.com/user-attachments/assets/92d2d76c-c94a-4dba-9739-4c6a1a5fa7a5">

<img width="1440" alt="booking2" src="https://github.com/user-attachments/assets/d58bb055-5f4a-4eeb-9f05-444393b7cc54">

-> Cabins:

<img width="1440" alt="cabin" src="https://github.com/user-attachments/assets/98e07ed1-1d8e-4ac3-9dbb-e2cb77252c2d">

<img width="1440" alt="create_cabin" src="https://github.com/user-attachments/assets/02e9229d-da1e-4247-8095-73230b7f7f04">

-> Create new user:

<img width="1440" alt="create_user" src="https://github.com/user-attachments/assets/a7c75556-344b-4d81-8314-0703ea4edcbe">

-> Settings

<img width="1440" alt="settings" src="https://github.com/user-attachments/assets/1ccb7a31-ad6a-49ec-bb8d-a9f2735d1ed4">

-> Update User:

<img width="1440" alt="update_user" src="https://github.com/user-attachments/assets/0c412eae-5fb6-46b8-9b25-3683fda7515f">


## ⚫️ Dark Mode Images: 

-> Login

<img width="1440" alt="login" src="https://github.com/user-attachments/assets/6cfd9a63-63ac-48e6-b985-ed8a7700a025">

-> Dashboard:

<img width="1440" alt="dashboard" src="https://github.com/user-attachments/assets/6f52c076-7028-4187-baa8-154b6373bd59">

-> Bookings: 

<img width="1440" alt="bookings1" src="https://github.com/user-attachments/assets/70963afb-e37f-4d90-9bf7-8306ea81b3ba">

<img width="1440" alt="bookings2" src="https://github.com/user-attachments/assets/5d1d78c0-897e-40d7-ac87-613b733f38cf">

-> Cabins:

<img width="1440" alt="Cabin" src="https://github.com/user-attachments/assets/32a7e6ac-15ea-491a-b0ea-bb98cb1a122f">

<img width="1439" alt="create_cabin" src="https://github.com/user-attachments/assets/c9872632-95e8-428c-96a5-310a630cbad7">

-> Create new user:

<img width="1439" alt="create_user_dark" src="https://github.com/user-attachments/assets/329664d2-b478-4703-9310-9a33c0174144">

-> Settings:

<img width="1440" alt="settings" src="https://github.com/user-attachments/assets/36276146-2c39-4419-abe3-9db6973c5103">

-> Update User:

<img width="1439" alt="update_user" src="https://github.com/user-attachments/assets/3ca60cfa-b400-44ab-b9a6-1605d34e87af">

# Note:

Feel free to use the project and in case of any issues or queries, contact me using my socials in my bio.

Happy coding😊
