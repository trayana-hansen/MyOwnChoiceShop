import express from 'express'
import dotenv from 'dotenv'

const app = express();
app.use(express.urlencoded({ extended: true}))

dotenv.config();

const port = process.env.PORT || 4500

//const api_key = process.env.APIKEY;



app.get('/', (req, res) => {
	res.send('Hi')
})
app.listen(4500, () => {
	console.log(`The server is running on localhost:${port}`);
});
