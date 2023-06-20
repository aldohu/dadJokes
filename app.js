const para = document.querySelector('.joke');
const button = document.querySelector('.btn');
console.log(para);
const joke = async () => {
	try {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await response.json();

		para.innerHTML = data.value;
	} catch (error) {
		console.error(error);
	}
};

joke();

button.addEventListener('click', joke);
