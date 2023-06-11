

// get the id ='input' set tha variable Screen
let Screen=document.getElementById('input');

// Display function | button click Display The Number
function display(num) {
    Screen.value+=num;
      
}

// Calculate The all values
function Calculate()
{
	try
	{
		Screen.value=eval(Screen.value);
	}
	catch(err)
	{
       alert('Invalid input');
	}
}

// clear the button click all values clear 

function Clear()
{
      Screen.value='';
}

// Delete the button click Delete the one value

function Delete()
{
	Screen.value=Screen.value.slice(0,-1);
}