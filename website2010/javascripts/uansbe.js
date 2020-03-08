function uaNsbe_lastupdate(){
	/*LAST UPDATE NOTIFICATION AT BOTTOM OF EACH PAGE*/
	document.writeln("<p><strong>Last Updated:</strong> "  + document.lastModified + "</p>");
}



/*	START OF EMAIL ADDRESS VALIDATOR - START OF EMAIL ADDRESS VALIDATOR */
/*	START OF EMAIL ADDRESS VALIDATOR - START OF EMAIL ADDRESS VALIDATOR */
function uansbe_validate_email_address(){

	//Advanced Email Check credit-
	//By JavaScript Kit (http://www.javascriptkit.com)
	//Over 200+ free scripts here!
	//http://www.javascriptkit.com/script/script2/acheck.shtml

	var testresults
	function checkemail(){
		var str=document.form.Reply_Email.value
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (filter.test(str)){
			testresults=true
		}
		else{
			alert("Please input a valid email address!")
			testresults=false
			invalid_input++;
		}
		return (testresults)
	}
	
	function checkbae(){
		if (document.layers||document.getElementById||document.all)
			return checkemail()
		else
			return true
	}
	
	checkbae();
}
/*	END OF EMAIL ADDRESS VALIDATOR - END OF EMAIL ADDRESS VALIDATOR */
/*	END OF EMAIL ADDRESS VALIDATOR - END OF EMAIL ADDRESS VALIDATOR */





/*START OF PHONE NUMBER VALIDATOR - START OF PHONE NUMBER VALIDATOR*/
/*START OF PHONE NUMBER VALIDATOR - START OF PHONE NUMBER VALIDATOR*/
function uansbe_validate_phone_number(){
	//http://www.smartwebby.com/DHTML/phone_no_validation.asp
	/**
	 * DHTML phone number validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
	 */

	// Declaring required variables
	var digits = "0123456789";
	// non-digit characters which are allowed in phone numbers
	var phoneNumberDelimiters = "()- ";
	// characters which are allowed in international phone numbers
	// (a leading + is OK)
	var validWorldPhoneChars = phoneNumberDelimiters + "+";
	// Minimum no of digits in an international phone no.
	var minDigitsInIPhoneNumber = 10;
	

	function isInteger(s){
		var i;
		for (i = 0; i < s.length; i++)
		{   
			// Check that current character is number.
			var c = s.charAt(i);
			if (((c < "0") || (c > "9"))) return false;
		}
		// All characters are numbers.
		return true;
	}
	function trim(s){
		var i;
		var returnString = "";
		// Search through string's characters one by one.
		// If character is not a whitespace, append to returnString.
		for (i = 0; i < s.length; i++)
		{   
			// Check that current character isn't whitespace.
			var c = s.charAt(i);
			if (c != " ") returnString += c;
		}
		return returnString;
	}
	function stripCharsInBag(s, bag){
		var i;
		var returnString = "";
		// Search through string's characters one by one.
		// If character is not in bag, append to returnString.
		for (i = 0; i < s.length; i++)
		{   
			// Check that current character isn't whitespace.
			var c = s.charAt(i);
			if (bag.indexOf(c) == -1) returnString += c;
		}
		return returnString;
	}

	function checkInternationalPhone(strPhone){
		var bracket=3
		strPhone=trim(strPhone)
		if(strPhone.indexOf("+")>1) return false
		if(strPhone.indexOf("-")!=-1)bracket=bracket+1
		if(strPhone.indexOf("(")!=-1 && strPhone.indexOf("(")>bracket)return false
		var brchr=strPhone.indexOf("(")
		if(strPhone.indexOf("(")!=-1 && strPhone.charAt(brchr+2)!=")")return false
		if(strPhone.indexOf("(")==-1 && strPhone.indexOf(")")!=-1)return false
		s=stripCharsInBag(strPhone,validWorldPhoneChars);
		return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
	}

	function ValidatePhoneNumber(){
		var Phone=document.form.Phone_Number;
		
		/*if ((Phone.value==null)||(Phone.value=="")){
			alert("Please Enter your Phone Number")
			Phone.focus()
			return false
		}*/
		if (checkInternationalPhone(Phone.value)==false){
			alert("Please Enter a Valid 10-Digit or International Phone Number")
			Phone.value=""
			Phone.focus()
			invalid_input++;
			return false
			
			
		}
		else{
			return true
		}
	}	
	ValidatePhoneNumber();
}
/*END OF PHONE NUMBER VALIDATOR - END OF PHONE NUMBER VALIDATOR*/
/*END OF PHONE NUMBER VALIDATOR - END OF PHONE NUMBER VALIDATOR*/


/*START RANDOM STRING GENERATOR - START RANDOM STRING GENERATOR*/
/*START RANDOM STRING GENERATOR - START RANDOM STRING GENERATOR*/
function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 15;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	//document.randform.randomfield.value = randomstring;
	return randomstring;
}
/*END RANDOM STRING GENERATOR - END RANDOM STRING GENERATOR*/
/*END RANDOM STRING GENERATOR - END RANDOM STRING GENERATOR*/