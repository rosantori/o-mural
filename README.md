## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project dir](#project-dir)
* [TODO: Future Improvements](#future)

## General info
Project developed during the eleventh Omnistack Week, promoted by Rocketseat.
O MURAL allows people to share their emotions by writing poems, texts or quotes with others. 

## Technologies
Project is created with:
* Node version: v12.16.1

## Setup
To run this project, install it locally using npm, first initiate server:
, then run either mobile or web (frontend directory) version:

```
$ cd ./backend
$ npm start

```
Open a new terminal and run the web version

```
$ cd ./frontend
$ npm start
```

## Project dir

### (backend)
    (src)
        |--- controllers
        |    |---PostController.js
        |    |---ProfileController.js
        |    |---ProfileController.js
        |    |---UserController.js
        |---database
        |        |---migrations
        |        |        |---20200325203747_createUsers.js
        |        |        |---20200325205326_createIncidents.js
        |        |
        |        |---connection.js
        |        |---db.sqlite
        |
        |---index.js
        |---routes.js
    knexfile.js 
    package.json
    .gitignore

### (frontend)
    (public)
    |---featherpen.png
    |---index.html
    (src)
    |--- assets
        |---featherpen.png
    |---pages
            |---Logon
                |---index.js
                |---styles.css
            |---NewPost
                |---index.js
                |---styles.css
            |---Profile
                |---index.js
                |---styles.css
            |---Register
                |---index.js
                |---styles.css
    |---services
            |---api.js
    App.js
    global.css
    index.js
    routes.js
    Header.js
    package.json

### (mobile)

    (.expo-shared)
        |---assets.json
    (assets)
        |---icon.png
        |---splash.png
    (src)
        |--- assets
            |---logo.png
        |---pages
                |---Detail
                    |---index.js
                    |---styles.js
                |---Posts
                    |---index.js
                    |---styles.js
                |---TeacherList
        |---routes
                |---AppStack.tsx
                |---StudyTabs.tsx
        |---services
                |---api.js
        |---routes.js
    .gitignore
    App.js
    app.json
    babel.config.js
    package.json


## Future Improvements
- Password for user
- Comments and likes
- Text stylization