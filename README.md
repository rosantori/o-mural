# Summary
Project developed during the eleventh Omnistack Week, promoted by Rocketseat.
O MURAL allows people to share their emotions with others by writing poems, texts or quotes.
It is created with:
* Node version: v12.16.1
* React version: 16.13.1
* Axios version: 0.19.2
* Cors version: 2.8.5
* Express version: 4.17.1
* Expo version: 36.0.0
* Bcrypt version: 5.0.0

## Running the app

```
$ cd <path to>/o-mural/backend
$ npm install
$ npm start

```
Open a new terminal and run the web version

```
$ cd <path to>/o-mural/frontend
$ npm install
$ npm start
```
Open a new terminal and run the mobile version
 ```
 $ cd <path to>/o-mural/mobile
 $ npm install
 $ expo start
 ```
## Files Hierarchy
```
(backend)
|---(src)
|   |---(controllers)
|   |   |   |---PostController.js
|   |   |   |---ProfileController.js
|   |   |   |---SessionController.js
|   |   |   |---UserController.js
|   |---(database)
|   |   |---(migrations)
|   |   |   |   |---20200325203747_createUsers.js
|   |   |   |   |---20200325205326_createIncidents.js
|   |   |   |
|   |   |   |---connection.js
|   |   |   |---db.sqlite
|   |   |
|   |   |---index.js
|   |   |---routes.js
|   |---knexfile.js 
|   |---package.json
|   |---.gitignore
|
(frontend)
|---(public)
|   |---featherpen.png
|   |---index.html
|---(src)
|   |--- (assets)
|   |   |---featherpen.png
|   |---(pages)
|   |   |---(Logon)
|   |   |   |---index.js
|   |   |   |---styles.css
|   |   |---(NewPost)
|   |   |   |---index.js
|   |   |   |---styles.css
|   |   |---(Profile)
|   |   |   |---index.js
|   |   |   |---styles.css
|   |   |---(Register)
|   |   |   |---index.js
|   |   |   |---styles.css
|   |---(services)
|   |   |---api.js
|   |---routes.js
|---App.js
|---global.css
|---index.js
|---Header.js
|---package.json
|
(mobile)
|---(.expo-shared)
|   |   |---assets.json
|---(assets)
|   |   |---icon.png
|   |   |---splash.png
|---(src)
|   |---(assets)
|   |   |---logo.png
|   |---(pages)
|   |   |---(Detail)
|   |   |   |---index.js
|   |   |   |---styles.js
|   |   |---(Posts)
|   |   |   |---index.js
|   |   |   |---styles.js
|   |---(services)
|   |   |---api.js
|   |   |---routes.js
|---.gitignore
|---App.js
|---app.json
|---babel.config.js
|---package.json
```
## Future Improvements
- ~~Password for user~~
- User configurations
- Web feed page (all posts)
- Friends and following people
- Comments and likes
- Text stylization
