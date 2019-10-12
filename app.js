const express = require('express');
const exprHb = require('express-handlebars');
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));


app.engine('.hbs', exprHb({
    defaultLayout: null,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {getUsersPages, getHousesPages} = require('./getPages');
let {user, house} = require('./controllers');
let {userMiddleware, houseMiddleware} = require('./middleware');
let { provider } = require('./datBase');

app.get ('/', getUsersPages.getMainPage);
app.get ('/register', getUsersPages.getRegisterPage);
app.get ('/login', getUsersPages.getLoginPage);


app.post('/users', userMiddleware.checkUserValidMiddleware, user.createUser);
app.get('/users/:user_id', userMiddleware.isUserPresentMiddleware, user.getUser);
app.get ('/users', user.findAll);
app.post('/auth', userMiddleware.checkUserIsInDb, user.getUser);


app.get ('/new-house', getHousesPages.getHouseMainPage);
app.post('/houses', houseMiddleware.checkHouseValidMiddleware, house.createHouse);

app.get('/houses/:house_id', houseMiddleware.isHousePresent, house.getHouse);
app.get ('/houses', house.findAllHouses);



// app.all('*', async (req, res) => {
//
//     let [query] = await provider.promise().query('SELECT * FROM user');
//
//     res.json(query)
// });

app.all('*', getUsersPages.getErrorPage);


app.listen(3000, () => {
    console.log('HELLO');
});