<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [✅ How To Use](#howtouse)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)

<!-- PROJECT DESCRIPTION -->

# 📖 DOIT-rn Backend Api<a name="about-project"></a>

> Welcome to doit-rn backend rest api, the intuitive todo management application designed to help you stay organized and productive. With our seamless login and signup feature, you can easily create an account to access your personalized task lists.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Express js, mongoose


<!-- Features -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌟 Please leave a star if you liked this project 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>
To get a local copy up and running, follow these steps.

### Prerequisites

You don't need any previous installation in order to run this project

### Setup

Clone this repository to your desired folder:

<code>git clone https://github.com/nxn404-n/doit-rn_backend.git</code>

### Install

Use <code>npm i</code> to install all dependencies

### Usage

There's no command required to run the project


### Deployment

Use <code>npm start</code> to deploy the project


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✅ How to use <a name="howtouse"></a>

### Signup
- Method: POST
- URL: https://doit-rn-backend.onrender.com/api/user/signup
- Body: {"username": "",
"password": ""}

### Login
- Method: POST
- URL: https://doit-rn-backend.onrender.com/api/user/login
- Body: {"username": "",
"password": ""}

### Logout
- Method: POST
- URL: https://doit-rn-backend.onrender.com/api/user/logout/:id(user id)

### Delete account
- Method: DELETE
- URL: https://doit-rn-backend.onrender.com/api/user/:id(user id)

### Post a todo
- Method: POST
- URL: https://doit-rn-backend.onrender.com/api/todo/:id(user id)
- Body: {"task": ""}

### Get all todos of an user
- Method: GET
- URL: https://doit-rn-backend.onrender.com/api/todo/:id(user id)
- Body: {"task": ""}

### Update a todo
- Method: PUT
- URL: https://doit-rn-backend.onrender.com/api/todo/:id(todo id)
- Body: {"completed": ""}

### Delete a todo
- Method: DELETE
- URL: https://doit-rn-backend.onrender.com/api/todo/:id(todo id)
<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 Adil

- GitHub: [@githubhandle](https://github.com/nxn404-n)
- Twitter: [@twitterhandle](https://twitter.com/nxn_404)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

All issues are welcomed !! You can contribute by creating an issue.
<br>
<a href="https://github.com/nxn404-n/Quizro/issues">Create an issue</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please leave a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>
