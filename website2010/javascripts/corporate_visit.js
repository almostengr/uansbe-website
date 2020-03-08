var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();

function corporateVisit_verify(){
	var themessage = "You are required to complete the following fields: ";
	
	if (document.form.Company_Name.value==""){
		themessage = themessage + "\n -Company Name";
	}	
	if (document.form.Representative_Name.value==""){
		themessage = themessage + "\n -Company Representative Name";
	}
	if (document.form.Reply_Email.value==""){
		themessage = themessage + "\n -Company Representative E-Mail Address";
	}
	if ((document.form.From_Month.value=="") || (document.form.From_Date.value=="")){
			themessage = themessage + "\n -Starting Date";	
	}
	if ((document.form.To_Month.value=="") || (document.form.To_Date.value=="")){
		themessage = themessage + "\n -Ending Date";
	}
	
	//alert if fields are empty and cancel form submit
	if (themessage == "You are required to complete the following fields: "){
		
		invalid_input=0;	//RESETS COUNTER BACK TO 0 FOR SUBMISSION/RESUBMISSION
		
		if(document.form.Phone_Number.value!=""){
			uansbe_validate_phone_number();
		}
		if(document.form.Reply_Email.value!=""){
			uansbe_validate_email_address();
		}
		if(document.form.From_Month.value != "" && document.form.From_Date.value != "" && document.form.Start_Time.value != ""){
			
			if(document.form.From_Month.value == 4 || document.form.From_Month.value == 6 || document.form.From_Month.value == 9 || document.form.From_Month.value == 11){
			//CHECKS FOR CERTAIN MONTHS TO MAKE SURE DATE IS VALID
				if(document.form.From_Date.value > 30){
					alert("Please select a valid date.");
					invalid_input = 1;
				}
			}
			else if(document.form.From_Month.value == 2){
				if(document.form.From_Date.value > 28){
					alert('Please select a valid date.');
					invalid_input = 1;
				}
			}
			else{
			}
			
			if(document.form.From_Year.value == year){
				if(document.form.From_Month.value < month){
					alert("Date has already passed. Please select another.");
					invalid_input = 1;
				}
				else if(document.form.From_Month.value == month){
					if(document.form.From_Date.value <= day){
						alert("Date has already passed. Please select another.");
						invalid_input = 1;
					}
				}
			}
			//CHECK TO SEE IF DATE HAS PASSED
			
			//CHECK TO SEE IF THE TO DATE IS BEFORE THE FROM DATE
			if(document.form.To_Year.value == year){
				if(document.form.To_Month.value < document.form.From_Month.value){
					alert("The \"To\" date is before the \"From\" date. Please select another date.");
					invalid_input =1;
				}
				else if(document.form.To_Month.value == document.form.From_Month.value){
					if(document.form.To_Month.value <= document.form.From_Month.value){
					alert("The \"To\" date is before the \"From\" date. Please select another date.");
					invalid_input =1;
					}
				}
			}
			//CHECK TO SEE IF THE TO DATE IS BEFORE THE FROM DATE
		} 
		if(document.form.Company_Website.value == "http://"){
			document.form.Company_Website.value == "ram";
		}
		
		if(invalid_input == 0){	//IF ALL INPUTS PASS, THEN SUBMIT FORM
			document.form.submit();
		}
		else{	//IF ALL INPUTS DO NOT PASS, THEN DON'T SUBMIT FORM
			return false;
		}
	}
	else{
		alert(themessage);
		return false;
	}	
}

function corporateVisit_toYearWrite(){
	document.writeln("<select name='To_Year' size='1'>");
	document.writeln("<option value=\"\" selected=\"selected\">-Year-</option>");
	document.writeln("<option value=\"" + year + "\">" + year + "</option>\n");
	document.writeln("<option value=\"" + (year+1) + "\">" + (year+1) + "</option>\n");
	document.writeln("</select>");
}

function corporateVisit_fromYearWrite(){
	document.writeln("<select name='From_Year' size='1'>");
	document.writeln("<option value=\"\" selected=\"selected\">-Year-</option>");
	document.writeln("<option value=\"" + year + "\">" + year + "</option>\n");
	document.writeln("<option value=\"" + (year+1) + "\">" + (year+1) + "</option>\n");
	document.writeln("</select>");
}

function corporateVisit_submitButton(){
	document.writeln("<input type=\"button\" value=\" Submit \"  onclick=\"corporateVisit_verify();\" />");
}