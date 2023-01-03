const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
})


const arrContent = [
	{title: 'products', content: 'lorem ipsum'},
	{title: 'about us', content: 'lorem ipsum'}

]

function link(pageId) {
	console.log(arrContent[pageId]);
}
