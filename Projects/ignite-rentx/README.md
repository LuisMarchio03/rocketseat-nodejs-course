# 🚀 Ignite Node.js - Rentx


## About RentX
    
- **NodeJS** + **Typescript**

- This API was built for a fictitious **car rental** company - **RentX**, during the **Ignite - NodeJS Trail** course by [**Rocketseat**](https://github.com/Rocketseat).

## 📋 Business Rules and Requirements
### Car registration

**RF**
- It must be possible to register a new car.


**RN**
- It should not be possible to register a car with an existing license plate.
- The car must be registered, by default, with availability.
- The user responsible for the registration must be an administrator user.

### Car listing

**RF**
- It should be possible to list all available cars
- It should be possible to list all available cars by - category name
- It should be possible to list all available cars by - brand name
- It should be possible to list all available cars by - car name

**RN**
- The user does not need to be logged into the system.


### Registration of Specification in the car

**RF**
- It must be possible to register a specification for a car


**RN**
- It should not be possible to register a specification for an - unregistered car.
- It should not be possible to register an existing specification for the same car.
- The user responsible for the registration must be a user - administrator.


### Registration of car images

**RF**
- It must be possible to register the image of the car

**RNF**
- Use multer to upload files

**RN**
- The user must be able to register more than one image for the - same car
- The user responsible for the registration must be a user - administrator.


### Car rental

**RF**
- It must be possible to register a rental


**RN**
- The rental must have a minimum duration of 24 hours.
- It should not be possible to register a new lease if there is already one open for the same user
- It should not be possible to register a new rental if there is already one open for the same car
- The user must be logged into the application
- When making a rental, the status of the car must be - changed to unavailable


### Car return

**RF**
- It must be possible to return a car

**RN**
- If the car is returned with less than 24 hours, it will be charged the full daily rate.
- When making the return, the car must be released for - another rental.
- When making the return, the user must be released - for another rental.
- When making the return, the total rent must be calculated.
- If the return time is longer than the expected delivery time, a fine will be charged - proportional to the days of delay.
- If there is a fine, it must be added to the total rent.
- The user must be logged into the application


### User Rental Listing

**RF**
- It must be possible to search for all rentals for the user

**RN**
- The user must be logged into the application


### Recover Password

**RF**
- It must be possible for the user to recover the password by informing the email
- The user must receive an email with the step by step for password recovery
- User should be able to enter a new password

**RN**
- User needs to enter a new password
- The link sent for recovery must expire in 3 hours



## 💻 Project Installation
**1.** Run a git clone
```
git clone git@github.com:LuisMarchio03/ignite-rentx.git
``` 
**2.** Access the project
```
cd  ignite-rentx
``` 
**3.** install the dependencies
```
yarn 
ou
npm i
```
**4.** run the application
```
yarn dev
ou
npm run dev
```

## Insomnia


## 🧪 Tests
**Unitary tests + Integration Tests + Jest**

## 👨‍💻 Developed by

[**LuisMarchio03**](https://github.com/LuisMarchio03) - **GitHub**

[**Luís Gabriel Marchió Batista**](https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-a0aa64206/) - **Linkedin**

<p align="center">
  <img src=".github/ignite-nodejs.png" width="650" title="Luís Gabriel - Trilha Node.js Ignite">
</p>

