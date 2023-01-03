import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath} from 'url'

//Import routers
import InitRouter from './Router/init.router.js'
import GenderRouter from './Router/gender.router.js'
import TypeRouter from './Router/type.router.js'
import BrandRouter from './Router/brand.router.js'
import UserRouter from './Router/user.router.js'
import ReviewRouter from './Router/review.router.js'
import ProductRouter from './Router/product.router.js'
import { router as AuthRouter } from './Router/authenticate.router.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/views'));

dotenv.config();

const port = process.env.PORT || 4500




app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.get('/login', (req, res) => {
	res.render('login.ejs')
})
app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
	res.render('register.ejs')
})
app.post('/register', (req, res) => {
	req.body.email
})
app.get('/about', (req, res) => {
	res.render('about.ejs')
})


//Use routers, it cannot be used before it is called
app.use(InitRouter)
app.use(GenderRouter)
app.use(TypeRouter)
app.use(BrandRouter)
app.use(UserRouter)
app.use(ReviewRouter)
app.use(ProductRouter)
app.use(AuthRouter)


app.listen(4500, () => {
	console.log(`The server is running on localhost:${port}`);
});


