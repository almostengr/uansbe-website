/*	START OF LISTING FOR UPCOMING EVENTS - START OF LISTING FOR UPCOMING EVENTS	*/
/*	START OF LISTING FOR UPCOMING EVENTS - START OF LISTING FOR UPCOMING EVENTS	*/

var upcoming = new Array();
	/* EXAMPLE ("START MONTH","START DAY","START YEAR","START TIME","TITLE OF EVENT","LOCATION","END MONTH","END DAY","END YEAR","URL");	*/
upcoming[0] = new Array(11,6,2009,"","NSBE Region 3 FRC","Atlanta, GA",11,8,2009,"http://www.nsbe.org/region3/conf_frc.php");
upcoming[1] = new Array(11,20,2009,"6:30p","3rd Annual Kings of the Court Basketball Tournament","UA Student Recreation Center",0,0,0,"http://bama.ua.edu/~uansbe/kingsofthecourt");
upcoming[2] = new Array(3,31,2010,"","NSBE National Conference","Toronto, Canada",4,4,2010,"http://convention.nsbe.org/convention2010/");

	/* EXAMPLE ("START MONTH","START DAY","START YEAR","START TIME","TITLE OF EVENT","LOCATION","END MONTH","END DAY","END YEAR","END TIME");	*/

/*	END OF LISTING FOR UPCOMING EVENTS - END OF LISTING FOR UPCOMING EVENTS */
/*	END OF LISTING FOR UPCOMING EVENTS - END OF LISTING FOR UPCOMING EVENTS */





/* DO NOT EDIT BELOW THIS LINE - DO NOT EDIT BELOW THIS LINE - DO NOT EDIT BELOW THIS LINE */

/* START GLOBAL VARIABLES - START GLOBAL VARIABLES */
/* START GLOBAL VARIABLES - START GLOBAL VARIABLES */

var invalid_input;

/* END GLOBAL VARIABLES - END GLOBAL VARIABLES - END GLOBAL VARIABLES */
/* END GLOBAL VARIABLES - END GLOBAL VARIABLES - END GLOBAL VARIABLES */



/*	START OF CODE FOR UPCOMING EVENTS - START OF CODE FOR UPCOMING EVENTS	*/
/*	START OF CODE FOR UPCOMING EVENTS - START OF CODE FOR UPCOMING EVENTS	*/
function uansbe_dates(){
	/*var time = new Date();
	var month = time.getMonth();
	var date = time.getDate();
	var year = time.getFullYear();
	
	
	month = month + 1; //ADJUSTS DATE OUT OF JAVASCRIPT NUMBERING
	
	
	document.write("<ul>");
	if (upcoming.length != 0){
	//IF UPCOMING EVENTS ARRAY IS NOT EMPTY
	
		for(var k = 0; k < upcoming.length; k++){
		
			if(upcoming[k] < month){	
				
		
	}*/
	
	
	
	
	
	document.write("<ul>");
	
	if (upcoming.length != 0){
		for(var k = 0; k < upcoming.length; k++){
		
			//NUMBER ADJUSTMENT
			upcoming[k][0] = upcoming[k][0] - 1;
			
			if(upcoming[k][6] > 0){
				upcoming[k][6] = upcoming[k][6] - 1;
			}
			
		
	var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

			document.write("<li class=\"calendar\">" + upcoming[k][4] + "<br />\n");
			document.write("<span style=\"color: #fff;\"><strong>When: </strong>");
			document.write(month[upcoming[k][0]] + " " + upcoming[k][1] + ", " + upcoming[k][2]);

			if(upcoming[k][6] == 0 && upcoming[k][7] == 0 && upcoming[k][8] == 0){
				document.write("; " + upcoming[k][3]);
			}
			else{
				document.write(" - " + month[upcoming[k][6]] + " " + upcoming[k][7] + ", " + upcoming[k][8]);
			}
			
			document.write("<br /><strong>Where: </strong>" + upcoming[k][5]);
			
			if(upcoming[k][9] != ""){
				document.write("<br /><a href=\"" + upcoming[k][9] + "\" target=\"_blank\">");
				//document.write("<br /><a href=\"http://pub48.bravenet.com/calendar/day.php?usernum=4098147185&amp;");
				//document.write("y=" + upcoming[k][2] + "&amp;m=" + (upcoming[k][0] + 1) + "&amp;d=" + upcoming[k][1]);
				document.write("More Information</a>");
			}
			document.write("<br /></span>\n</li>");
		}
	}
	/*
	else{
		document.write("<li class=\"heading2\">No Upcoming Events</li>");
	}
	*/
	document.write("</ul>");
	
}
/*	END OF CODE FOR UPCOMING EVENTS - END OF CODE FOR UPCOMING EVENTS	*/
/*	END OF CODE FOR UPCOMING EVENTS - END OF CODE FOR UPCOMING EVENTS	*/






/*	START OF CODE FOR BOOKMARKS	- START OF CODE FOR BOOKMARKS	*/
/*	START OF CODE FOR BOOKMARKS	- START OF CODE FOR BOOKMARKS	*/
function writeBookmark(page){
	if(page == 1){
		document.write("<a href=\"javascript:bookmarksite()\">Bookmark UA NSBE</a>");
	}
	else{
		document.write(" | <a href=\"javascript:bookmarksite()\">Bookmark UA NSBE</a>");
	}
}


/***********************************************
* Bookmark site script- � Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/
/*MODIFIED BY KENNY R., UA NSBE TELECOMMUNICATIONS CHAIR*/

/* Modified to support Opera */
function bookmarksite(){

	var title = "UA NSBE";
	var url = "http://bama.ua.edu/~uansbe/";

	if (window.sidebar) // firefox
		window.sidebar.addPanel(title, url, "");
	else if(window.opera && window.print){ // opera
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	} 
	else if(document.all)// ie
		window.external.AddFavorite(url, title);
}
/*	END OF CODE FOR BOOKMARKS -	END OF CODE FOR BOOKMARKS	*/
/*	END OF CODE FOR BOOKMARKS -	END OF CODE FOR BOOKMARKS	*/





/*	START OF CODE FOR BRAVENET SEARCH - START OF CODE FOR BRAVENET SEARCH	*/
/*	START OF CODE FOR BRAVENET SEARCH - START OF CODE FOR BRAVENET SEARCH	*/
/*
function runPredictor(){
	predictad_input_id='keyword';
	predictad_ads_mode='0';
	predictad_db='1';
	predictad_site='3132';
	predictad_cs='7000-224';
	predictad_box_id='1';
	predictad_skin='mclassic';
	predictad_align='left';
	predictad_show_teaser=true;
	predictad_select_color='background-color: #FFCC00;border:solid 1px #FFCC00;';predictor();
}
try{
	var html_doc = document.getElementsByTagName('head')[0];
	predictad_js = document.createElement('script');
	predictad_js.setAttribute('type', 'text/javascript');
	predictad_js.setAttribute('src', 'http://www.predictad.com/scripts/molosky/combined.js');
	html_doc.appendChild(predictad_js);
	predictad_js.onreadystatechange = function () {
		if (predictad_js.readyState == 'complete'||predictad_js.readyState == 'loaded') {
			runPredictor();
		}
	};
	predictad_js.onload = function () {
		runPredictor();
	};
	var f = document.getElementById('userid').setAttribute('autocomplete', 'off'); 
}
catch(pex){
};
*/
/*	END OF CODE FOR BRAVENET SEARCH - END OF CODE FOR BRAVENET SEARCH	*/
/*	END OF CODE FOR BRAVENET SEARCH - END OF CODE FOR BRAVENET SEARCH	*/





/*	START OF EMAIL ADDRESS VALIDATOR - START OF EMAIL ADDRESS VALIDATOR */
/*	START OF EMAIL ADDRESS VALIDATOR - START OF EMAIL ADDRESS VALIDATOR */
function uansbe_validate_email_address(checkEmailAddress){

	//Advanced Email Check credit-
	//By JavaScript Kit (http://www.javascriptkit.com)
	//Over 200+ free scripts here!
	//http://www.javascriptkit.com/script/script2/acheck.shtml

	var testresults
	function checkemail(){
		var str=checkEmailAddress;
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
function uansbe_validate_phone_number(checkPhoneNumber){
	var checkThis = checkPhoneNumber;
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

	function ValidatePhoneNumber(checkThis){
		
		var Phone=checkThis;
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