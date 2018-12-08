localStorage.setItem('userid','ardufarmbotiiest');
localStorage.setItem('password','ardufarmbotiiest');
function myjok(){
	let mk=document.getElementById('myform').value;
	let mj=document.getElementById('pol').value;
	if(mk==='ardufarmbotiiest' && mj==='ardufarmbotiiest'){
		window.location.href='index2.html';
	}
	else{
		document.getElementById('special').innerHTML="Wrong Credentials";
	}
}
