var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();

function corporateRequest_verify(){
     //USED ON CORPORATE_REQUEST.HTML
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
	if (document.form.Month.value==""){
		themessage = themessage + "\n -Requested Meeting Month";
	}
	if (document.form.Date.value==""){
		themessage = themessage + "\n -Requested Meeting Date";
	}
	/*if (document.form.Start_Time.value==""){
		themessage = themessage + "\n -Requested Meeting Time";
	}*/
	
	//alert if fields are empty and cancel form submit
	if (themessage == "You are required to complete the following fields: "){
		
		invalid_input=0;	//RESETS COUNTER BACK TO 0 FOR SUBMISSION/RESUBMISSION
		
		if(document.form.Phone_Number.value!=""){
			uansbe_validate_phone_number();
		}
		if(document.form.Reply_Email.value!=""){
			uansbe_validate_email_address();
		}
		if(document.form.Month.value != "" && document.form.Date.value != ""){ //&& document.form.Start_Time.value != ""
			
			if(document.form.Month.value == 4 || document.form.Month.value == 6 || document.form.Month.value == 9 || document.form.Month.value == 11){
			//CHECKS FOR CERTAIN MONTHS TO MAKE SURE DATE IS VALID
				if(document.form.Date.value > 30){
					alert("Please select a valid date.");
					invalid_input = 1;
				}
			}
			else if(document.form.Month.value == 2){
				if(document.form.Date.value > 28){
					alert('Please select a valid date.');
					invalid_input = 1;
				}
			}
			else{
			}
			
			if(document.form.Year.value == year){
				var form_month = document.form.Month.value; //COPY VALUE TO KEEP FROM CHANGING FORM VALUE AFTER SUBMISSION
				
				if(document.form.Month.value < month){
					alert("Date has already passed. Please select another.");
					invalid_input = 1;
				}
				else if(document.form.Month.value == (month+1)){
					if(document.form.Date.value < date){
						alert("Date has already passed. Please select another.");
						invalid_input = 1;
					}
					else if(document.form.Date.value == date){
						alert("You selected today\'s date. Please select another.");
						invalid_input = 1;
					}						
				}
			}
			//CHECK TO SEE IF DATE HAS PASSED
			
		} 
		if(document.form.Company_Website.value == "http://"){
			document.form.Company_Website.value == "";
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

function corporateRequest_yearWrite(){		
     //USED ON CORPORATE_REQUEST.HTML
     document.writeln("<select name='Year' size='1'>");
	document.writeln("<option value='' selected='selected'>-Year-</option>");
	document.writeln("<option value='" + year + "'>" + year + "</option>");
	document.writeln("<option value='" + (year+1) + "'>" + (year+1) + "</option>");
	document.writeln("</select>");
}

function corporateRequest_submitButton(){
	document.writeln("<input type='button' value=' Submit '  onclick='corporateRequest_verify();' />");
	}