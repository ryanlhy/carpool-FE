# Carpooling App: Rating & Review Feature

## Project Details
FrontEnd Deployment: [https://carpool-fe-zeta.vercel.app/](https://carpool-fe-zeta.vercel.app/)  
FrontEnd Github: [https://github.com/ryanlhy/carpool-FE](https://github.com/ryanlhy/carpool-FE)  
BackEnd Deployment: [https://pullover-termite.cyclic.app/reviews](https://pullover-termite.cyclic.app/reviews)  
BackEnd Github: [https://github.com/ryanlhy/carpool-BE](https://github.com/ryanlhy/carpool-BE)

## Project Overview
This project is a prototype of a specific feature within a larger carpooling application designed with a focus on safety. Developed using React, ExpressJS and PostgreSql the feature aims to address carpooling safety concerns with a robust Rating and Review system.

## Rating and Review System
The Rating and Review system is a critical component designed to enhance the safety and trust within the carpooling community. This feature enables users to rate their drivers on a scale of 1-5 and provide textual feedback about their ride experience, using the ReactStars component. This user-generated content fosters transparency and accountability within the service, contributing to its overall quality and reliability.

## Project Thought Process
The motivation behind this project was to contribute towards making transportation safer, particularly within the realm of carpooling services. With user safety as a priority, the idea of a Rating and Review System was conceived to encourage transparency and accountability.

React, a popular front-end library, was selected for its component-based architecture, which enables a seamless development process. The primary focus was to create an interactive and user-friendly interface for users to rate and review their rides.

In the prototype, users are prompted with a modal post ride completion, asking them to rate and provide a review of their ride experience. For collecting the rating, the ReactStars component was utilized, while a text input was used for collecting user reviews. These inputs are prepared to be sent to the server using the fetch API.

In conclusion, the implementation of the Rating and Review System serves as an essential step towards enhancing safety and trust in carpooling services. Although this prototype focuses on a single feature, it provides the groundwork for the development of a more comprehensive carpooling application with additional safety features, integration of real data, and an expanded user base.

# Running the Project

## Environment Variable
In order to connect to your backend service, you need to create a .env file in your project root and add the following line:

REACT_APP_URL=your_api_url_here

Replace your_api_url_here with your actual backend service URL.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.