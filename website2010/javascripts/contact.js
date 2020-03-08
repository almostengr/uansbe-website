//<!-- Original:  Wayne Nolting (w.nolting@home.com) -->

//<!-- This script and many more are available free online at -->
//<!-- The JavaScript Source!! http://javascript.internet.com -->
//<!-- http://javascript.internet.com/forms/required-fields.html -->


function contact_copyValue(){	
	var copied_value;
	copied_value = document.form.carboncopy.value;
	
	
	if(copied_value == ""){
		document.form.Was_Sent_To.value = "Any Officer / Telecommunications / Webmaster";
	}
	else if(copied_value == "vicepresident.uansbe@gmail.com"){	
		document.form.Was_Sent_To.value = "Vice President";
	}
	else if(copied_value == "treasurer.uansbe@gamil.com"){
		document.form.Was_Sent_To.value = "Treasurer";
	}
	else if(copied_value == "torch.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "T.O.R.C.H.";
	}
	else if(copied_value == "senator1.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Senator 1";
	}
	else if(copied_value == "senator2.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Senator 2";
	}
	else if(copied_value == "secretary.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Secretary";
	}
	else if(copied_value == "publications.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Publications Chair";
	}
	else if(copied_value == "programs.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Programs Chair 1";
	}
	else if(copied_value == "programs2.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Programs Chair 2";
	}
	else if(copied_value == "pci.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Pre-Collegiate Initiative Chair";
	}
	else if(copied_value == "president.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "President";
	}
	else if(copied_value == "parliament.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Parliamentarian";
	}
	else if(copied_value == "membership.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Membership Chair";
	}
	else if(copied_value == "icd.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "ICD Chair";
	}
	else if(copied_value == "gsingleton@eng.ua.edu"){
		document.form.Was_Sent_To.value = "Faculty Advisor";
	}
	else if(copied_value == "conferenceplan.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Conference Planning Chair";
	}
	else if(copied_value == "academic.uansbe@gmail.com"){
		document.form.Was_Sent_To.value = "Academic Excellence Chair";
	}
	else{
	}
}

function contact_verify(){
	var themessage = "You are required to complete the following fields: ";
	
	
	if (document.form.carboncopy.value=="none"){
		themessage = themessage + "\n -Officer Submitting To";
	}	
	if (document.form.First_Last_Name.value==""){
		themessage = themessage + "\n -Your Name";
	}
	if (document.form.Reply_Email.value==""){
		themessage = themessage + "\n -Email Address";
	}
	if (document.form.Message_Comment_or_Question.value==""){
		themessage = themessage + "\n -Message, Comment, or Question";
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


function contact_submitButton(){
	document.write("<input type=\"button\" value=\" Submit \"  onclick=\"contact_verify();\" />");
}