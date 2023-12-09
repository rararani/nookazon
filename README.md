# Nookazon - A React Native App

A checkout mobile app.

## Features

Features include: Adding and Removing items, Entering user data, Discount, and storing that data in an external database. This application is also only a one-time use, you will have to refresh the app in order to reset your cart.

NOTE: It is preferable that you run this on Windows and with an Android emulator. Although this was built in React Native, I do not have a Mac or iOS this application was developed and tested strictly for Android apps. If you do decide to run this on iOS or a Mac, you may have to use "ngrok" or change the URL of the server from ``` http://10.0.2.2:3000 ``` to ``` http://localhost:3000 ``` which can be found on line 59 in LoginScreen.js (in apps/screens)

## Deployment Instructions

### Accessing the Database 

1. Got to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Sign in"
3. Enter the following credentials: Email: fakeu136@gmail.com  Password: fakepwd123   (NOTE: THIS IS A FAKE ACCOUNT I CREATED SPECIFIC TO THIS ASSIGNMENT)
4. You should see "Cluster0" on your dashboard, click on "Collections".
5. The database titled, "users" should appear automatical with a list of the data that has been exported to this database from the application.

### Running the Application
I originally wished to deploy the front-end of this application to Expo and connect the backend to Heroku's server, however in order to establish this connection along with the MongoDB Atlas database, a subscription of 95 USD/month was required. So instead, this application is deployed using GitHub itself.

1. Download or clone the code from this repository.
2. Open your terminal and go to the path that this project belongs to. (It is preferrable if you cd into the folder mobile-app as all project materials are located in this subdirectory)
3. In your terminal, enter ``` npm install ```
4. All the dependencies should be download after this.
5. ```npm start ```. Wait for Metro Bundler to start and run
6. The application is set to run on the local server. To establish connection enter either ```node Server ``` or ```nodemon Server ``` in a separate terminal (nodemon is preferable, simply enter ```npm install -g nodemon ``` to install. NOTE: THIS IS THE CASE IF YOU ARE RUNNING ON AN ANDROID EMULATOR (PREFERABLE)
7. Wait for the message "connected to mongo" to appear in your second terminal.
8. Go back to the first terminal and enter ```a```. This will run the application on your Android emulator.
9. Play through the app. After you enter the information in the Login Screen and click "proceed" the data will show up in MongoDB Atlas.

### Running the Unit Test
This application only contains one unit test, which checks to see if the app can successfully establish a connection to the server. This test has been made using Jest.
Enter ```npm run test```.
