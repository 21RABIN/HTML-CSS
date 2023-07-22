//Add tha value a and b
function addnumber()
{
	let a=Number(document.getElementById('a').value);
	let b=Number(document.getElementById('b').value);
	let results=a+b;
	let result=document.getElementById("result");
  
	result.innerHTML=results;
}

//subract the value a and b 
function divnumber()
{
	let a=Number(document.getElementById('a').value);
	let b=Number(document.getElementById('b').value);
	let results=a-b;
	let result=document.getElementById("result");

	result.innerHTML=results;
}