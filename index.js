import express from 'express'
import dotenv from 'dotenv'

//Import routers
import InitRouter from './Router/init.router.js'

const app = express();
app.use(express.urlencoded({ extended: true}))

dotenv.config();

const port = process.env.PORT || 4500

//const api_key = process.env.APIKEY;



app.get('/', (req, res) => {
	res.send('Hi')
})

//Use routers, it cannot be put before it is called
app.use(InitRouter)

app.listen(4500, () => {
	console.log(`The server is running on localhost:${port}`);
});
