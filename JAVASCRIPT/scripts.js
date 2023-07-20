function addnumber()
{
	let a=Number(document.getElementById('a').value);
	let b=Number(document.getElementById('b').value);
	let results=a+b;
	let result=document.getElementById("result");
  
	result.innerHTML=results;
}

function divnumber()
{
	let a=Number(document.getElementById('a').value);
	let b=Number(document.getElementById('b').value);
	let results=a-b;
	let result=document.getElementById("result");

	result.innerHTML=results;
}