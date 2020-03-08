	var unique;
	
function uniqueID(){
	unique = randomString();
	
	document.write("<p style=\"text-align: center;\">");
	document.write("Your Registration ID for registering is <strong>" + unique + "</strong>.<br /><br />");
	document.write("Please write or print this code. You will need this code to complete the registration process.<br />");
	document.write("Then continue to the <a href=\"");
	document.write("https://spreadsheets.google.com/viewform?formkey=dGU3eVVEZjgzUkx3VFl4aTFnOTRCUlE6MQ");
	document.write("&entry_8=" + unique + "\">Registration Page</a>.");
	document.write("</p>");
};

function writeUnique(){
	document.write(unique);
};