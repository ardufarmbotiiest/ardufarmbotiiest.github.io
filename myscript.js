const lol=document.querySelectorAll('p');
console.log(lol[0]);
document.querySelector('#myform').addEventListener('change', (event)=>{
	console.log(event.target.value);
});