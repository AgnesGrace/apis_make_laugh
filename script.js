boredBot = document.getElementById('boredBot')
button = document.getElementById('btn-click')

button.addEventListener("click", function() {

	fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(data => {
	
			boredBot.innerHTML = `
						<img class ='img' src ='${data.message}'/>
 					`
	})


}) 
