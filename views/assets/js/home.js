const url = 'http://localhost:4500/product'
let apiData;
const products = document.querySelector('#products')


function fetchAPI(){
fetch(url)
.then(response => {
    return response.json();
    //parsing of the data in a json file
})
.then(data => {
    apiData = data
    console.log(data);
    //the data when it's ready
})
.catch(error => {
console.error('There is a problem connecting to API');
    //on error
})
.finally(() => {
for (let index = 0; index < apiData.length; index++) {
	const element = apiData[index];
	document.getElementById('products').innerHTML +=
	`<figure class="card">
			<img src="${element.img}" alt="${element.name} image" height=250px;>
			<article class="container">
  				<h3>${element.name}</h3>
  				<p>${element.price} DKK</p>
  			</article>
	</figure>`
		}

})
}
/**
 * TODO set up a modal to display description and rating when clicked, scale image 2x
 */

fetchAPI()
