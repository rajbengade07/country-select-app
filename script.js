function show()
{
	event.preventDefault();
	let name=document.getElementById("name");
	let msg=document.getElementById("msg");
	let c=document.getElementById("country");
	
	if(name.value==="")
	{
		alert("please enter your name");
		msg.innerHTML="";
		name.focus();
		return;
	}
	if(name.value.trim()==="")
	{
		alert("Name can not be blank spaces");
		msg.innerHTML="";
		name.value="";
		name.focus();
		return;
	}
	if(!name.value.match(/^[A-Za-z ]+$/))
	{
		alert("Name should contain only alphabets");
		msg.innerHTML="";
		name.value="";
		name.focus();
		return;

	}
	msg.innerHTML=`${name.value} lives in ${c.value}`;
}