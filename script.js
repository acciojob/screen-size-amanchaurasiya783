//your JS code here. If required.
window.addEventListener('resize', function(){
	let h1 = document.getElementsByTagName('h1');
	let width = window.innerWidth;
	let height = window.innerHeight;
	h1[0].innerHTML = 'Width: ' + width + ' and Height: ' + height;
})