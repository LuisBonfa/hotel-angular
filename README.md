# Angular Cancun Hotel

Project that aims to do the basic management of a check in and check out service of a hotel. This project has the following main dependencies: Angular, Tailwindcss, ngPrime, ngPrimeIcons, PostCSS, AutoPrefixer, rxjs.

To run the project and test it, you first need to have the backend up and running on port 8090. You can check how to do that here: 
https://github.com/LuisBonfa/hotel-spring

<h2>🛠 Getting Started</h2>

<h3>Running your Server</h3>

To download all the dependencies, go to the project main folder and use:

    npm install

And after that to start the server just use the code below. <br>
Normally it will start a server on port **4200**.

    ng serve -o
 
 
<h3>Using already deployed server</h3>
The frontend is already deployed in a Vercel server, you can access it here: 
https://hotel-angular.vercel.app/

<h2>Endpoints </h2>

<h3>Login - Not Integrated</h3>

In this endpoint only the layout is done, there was no time for me to integrate it.

    Endpoint | GET | /

![image](https://user-images.githubusercontent.com/22968049/192288124-ac272630-f218-4162-bbb8-1d8f6096957c.png)

<h3>Create User - Not Integrated</h3>

    In this endpoint only the layout is done, there was no time for me to integrate it.

    Endpoint | GET | /create-user

![image](https://user-images.githubusercontent.com/22968049/192288152-bd9eca08-79c2-4a2c-93c0-316dcf986efc.png)

<h3>List of Bookings and Control</h3>

In this layout, the center of the website contains all the bookings identified and that are **ACTIVE**. <br>
The button with a "+" in it is a way to add new bookings to the list.

    Endpoint | GET | /booking-list

![image](https://user-images.githubusercontent.com/22968049/192288177-25d7ceae-a03f-4d20-b588-2fc2386c905b.png)

When you click the "+" button a right panel will appear for you to input the desired dates of the reservation, this component
is already programmed to only allow reservations that start 1 day plus the current date, and when you select a date, it automatically closes the range to maximum of 3 days. In addition to that, the component only allows reservations with max 30 days in the future.

![image](https://user-images.githubusercontent.com/22968049/192288232-cab7d364-3ead-405d-b96f-16e7ea7420ce.png)
![image](https://user-images.githubusercontent.com/22968049/192288436-3a5129a8-212b-49a6-94ac-a760b5ebb9f4.png)

To cancel a booking, the only thing that you need is to click in the button above the booking details, when you click the button a dialog will appear for corfimation.

![image](https://user-images.githubusercontent.com/22968049/192292565-96e90a10-2027-485c-8a91-1ad6197a8457.png)
![image](https://user-images.githubusercontent.com/22968049/192292762-e6466f9c-5fb2-4138-9e52-3f8780c7bd36.png)





