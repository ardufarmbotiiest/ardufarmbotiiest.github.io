//localStorage.setItem('userid','fahim');
//localStorage.setItem('password','fahim');
function myjok(){
	let mk=document.getElementById('myform').value;
	let mj=document.getElementById('pol').value;
	if(mk===localStorage.getItem('userid')){
		window.location.href='index2.html';
	}
	else{
		document.getElementById('special').innerHTML="Wrong Credentials";
	}
}