# Bootcamp API ReadMe 💻 :nerd_face:
> Node-express API enabling the search of Bootcamps.

## :satellite: Summary :satellite:
   - __Status:__ COMPLETE 🏆

## :hammer: Languages/Tools :hammer:
__Node.js | Express | MongoDB | Mongoose | POSTMAN | Heroku__

## 🔬 Notable Features 🔬


1. __CRUD__ - Create|Read|Update|Delete operations to change Bootcamp entries inside an external MongoDB database. :books:
2. __Backend__ - Run using NodeJS/Express with MongoDB/Mongoose hosted on Heroku.
3. __Authentication__ - E-mail authentication :cop: to enable/deny access to access user owned Bootcamp entries. 
4. __Authorisation__ - User-specific collections of documents as JSON objects :bookmark: which can be seen publically but only edited by the designated creator of the entry as admin.
5. __Responsive Styles__ - Use of modern CSS practices using Sass preprocessor :nail_care: to make a nicely styled user interface.
6. __GeoLocation__ - Conversion of user-input address to coordinates:earth_africa: to generate lists of Bootcamps within a specified radius.
7. __Calculation__ - adding up the total of each bootcamp :heavy_plus_sign: based on the sum of each individual cost.

## :chart_with_upwards_trend: How to Use :chart_with_upwards_trend:
### Watch a demo :movie_camera:
Visit my [portfolio website](https://tobymould.com/) and select the __'Expense Tracker App'__ project button :black_square_button: for a visual 30 second demonstration.

### Try for yourself :raised_hands:
1. Visit the [chatroom website](https://expense-tracker-223d5.web.app/)
2. Log in via your google account :shipit:
3. Add either an income source :money_with_wings: or expense (prepend with a '-:moneybag:') with the name of the entry!
4. See your total left over!
5. Log out 


# API Documentation
API Documentation: https://documenter.getpostman.com/view/11809015/TVCcX9LA

(1) MongoDB Atlas database capable of all CRUD functionality
(2) Development of Error-handling middleware
(3) Implementation of authentication, authorisation and some basic security features via Jason Web Tokens
(4) Routing with data schema, modeling, sanitisation and presenation
