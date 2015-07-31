 $(document).ready(function(){
        $('input[type="radio"][name="aadhar"]').click(function(){
            if($(this).attr("value")=="yes"){
               alert("1");
			   
                $(".aadhar-container").css("display", "block");
            }
            if($(this).attr("value")=="no"){
			  alert("12");
                $(".aadhar-container").css("display", "none");
               
            }
	});
	
	

	});
	
	function isValid(){
	  $(document).ready(function(){
	   var aadhar = $("#Aadhaarvalid").val();
	   if(validate()){
	   $('#continue').on("click", function(){
	  
	    if(aadhar >= '3'){
		  $(".aadhar-container").css("display", "none");
		  alert("You have entered wrong Aadhar Card Number for 3 times!!");
		}
		else{
	 	 $(".aadhar-container-otp").css("display", "block");
		}
	   });
     }
	});
	}
	
	function isValidOTP(){
	  $(document).ready(function(){
	   var otp = $("#OTPvalid").val();
	   $('#continue-otp').click(function(){
	    if(otp >= '3'){
		  $(".aadhar-container").css("display", "none");
		   $(".aadhar-container-otp").css("display", "none");
		  alert("You have entered wrong OTP for 3 times!!");
		}
		
	   });

	});
	}
	
	function validate(){
	  if((document.getElementById('aadharCardNunmber').value=='') || trimSpace(document.getElementById('aadharCardNunmber').value)=="")
	{
		alert("Please enter your Aadhar Card Number");
		document.getElementById('aadharCardNunmber').focus();
		document.getElementById('aadharCardNunmber').select();
		
	}
	 else if(document.getElementById('aadharCardNunmber').value.length!=12)
	{
		alert("Please enter a valid Aadhar Card Number");
		document.getElementById('aadharCardNunmber').focus();
		document.getElementById('aadharCardNunmber').select();
	}
	 else{
	return true;
	}
	
	}

function enter_check1(e)
{
	var whichCode = (window.Event) ? e.which : e.keyCode;	
	if (whichCode==13)
	{
	 if(common_validate())
	 {
	 return true;	 
	 }
	 return false;
	}	
}
function enter_check2(e)
{
	var whichCode = (window.Event) ? e.which : e.keyCode;	
	if (whichCode==13)
	{
	 if(common_validate2())
	 {
	 return true;	 
	 }
	 return false;
	}	
}
function enter_check3(e)
{
	var whichCode = (window.Event) ? e.which : e.keyCode;	
	if (whichCode==13)
	{
	 if(common_validate3())
	 {
	 return true;	 
	 }
	 return false;
	}
	
}
function clr(x, xid)
{
	if(x=="Credit Limit" || x=="Bank Name" || x=="Full Name" || x=="STD Code" || x=="Phone No." || x=="Extn"  || x=="As you would like it to appear on your C" || x=="STD c" ||x=="Card Number"||x=="Credit limit"|| x=="E-mail Id" )
	{
		document.getElementById(xid).value="";
	}
}
function special_validation(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[^a-zA-Z0-9.,\/ ]/g) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;	
}
function setlength(obj, length)
{
	if(navigator.appName=="Netscape")
	{
		var maxlength=length;
		if (obj.value.length>maxlength);
		obj.value=obj.value.substring(0, maxlength);
	}
}
function trimSpace(x)
{
	var emptySpace = / /g;
	var trimAfter = x.replace(emptySpace,"");
	return(trimAfter);
}
function textValidate(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[^a-zA-Z ]/g) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function numberValidate(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[^0-9]/g) != -1)
	{
		return false;
	}
	else
		return true;	
}
function numberValidate2(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[1-9]/g) != -1)
	{
		return false;
	}
	else
		return true;	
}

function alphaValidatePAN(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[^a-zA-Z]/g) != -1 || incomingString==defaultValue || parseInt(incomingString, 10) <= 0 )
		return false;
	else
		return true;	
}
function hint(object, baseText, eventName) {

  object.parentNode.childNodes[0].style.display = 'block';
   if (object.value == baseText)
		{
			object.value = "";
			
		 }
}
function unhint(object, baseText, eventName) {

  object.parentNode.childNodes[0].style.display = 'none';
 
		 if (object.value == "")
		{
			object.value = baseText;
		}
  
}

function hint1(elem) {

  elem.parentNode.childNodes[0].style.display = 'block';
}

function unhint1(elem) {

  elem.parentNode.childNodes[0].style.display = 'none';
 
}

function switchText(object, baseText, eventName)
 {
	if (eventName == "blur")
	{
		if (object.value == "")
		{
			object.value = baseText;
		}
	 }
	 else
	 {
		if (object.value == baseText)
		{
			object.value = "";
			
		 }
	 }
}
function month1()
{
if(trimSpace(document.getElementById('Annual_Income').value)=="" || !numberValidate(document.getElementById('Annual_Income').value,'') ||document.getElementById('Annual_Income').value==0)
{
 document.getElementById('monthly').style.display='none';
 document.getElementById('Monthly_Income').value='';
} else
{
 document.getElementById('monthly').style.display='block';
 document.getElementById('Monthly_Income').value=Math.round(document.getElementById('Annual_Income').value/12);
 }
 return false
}
function openNewWindow(URLtoOpen,windowName,height,width){
	windowFeatures ="menubar=no,scrollbars=yes,location=no,favorites=no,resizable=no,status=no,toolbar=no,directories=no";
	var test = "'";
	winLeft = (screen.width-width)/2;
	winTop = (screen.height-(height+110))/2;
	window.open(URLtoOpen,windowName,"width=" + width +",height=" + height + ",left=" + winLeft + ",top=" + winTop + test + windowFeatures + test);
}
function OpenformWindow()
{
	if(document.getElementById('txtHndValue').value == 0)
	{
		window.open("https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-popup.htm", "popupWindow", "height=550,width=780");
	}
}
function cardchoose()
{
	if((document.getElementById('card1').checked==false)&&(document.getElementById('card2').checked==false)&&(document.getElementById('card3').checked==false))
	{
	alert("Please select a card to proceed");
	document.getElementById('card1').focus();
		return false
	}
}


function ondirectorchange(val)
{
	if(val=='yes')
	{
	document.getElementById('dir_yes').style.display='block';
	}
	else
	{
	document.getElementById('dir_yes').style.display='none';
	}
}

		var DobFailed = false;
		var Dob2Failed = false;

function common_validate()
{
	if(document.getElementById('Title').selectedIndex < 0)
	{
		alert("Please select your Title");
		document.getElementById('Title').focus();
		return false;
	}
	if((document.getElementById('FirstName').value=='') || trimSpace(document.getElementById('FirstName').value)=="")
	{
		alert("Please enter your First Name");
		document.getElementById('FirstName').focus();
		document.getElementById('FirstName').select();
		return false;
	}
	if(!textValidate(document.getElementById('FirstName').value,''))
	{
		alert("Please enter your First Name (Alphabets only)")
		document.getElementById('FirstName').focus();
		document.getElementById('FirstName').select();
		return false;
	}
	
	if((trimSpace(document.getElementById('MiddleName').value)!==""))
	{
	if(!textValidate(document.getElementById('MiddleName').value,''))
	{
		alert("Please enter your MiddleName (Alphabets only)");
		document.getElementById('MiddleName').focus();
		document.getElementById('MiddleName').select();
		return false;
	}
	}
	if((document.getElementById('LastName').value=='') || trimSpace(document.getElementById('LastName').value)=="")
	{
		alert("Please enter your Last Name");
		document.getElementById('LastName').focus();
		document.getElementById('LastName').select();
		return false;
	}
	if(!textValidate(document.getElementById('LastName').value,''))
	{
		alert("Please enter your Last Name (Alphabets only)");
		document.getElementById('LastName').focus();
		document.getElementById('LastName').select();
		return false;
	}
	if(document.getElementById('dob_dd').selectedIndex<=0)
	{
		alert("Please select your Date of Birth");
		document.getElementById('dob_dd').focus();
		return false;
	}	
	if(document.getElementById('dob_mm').selectedIndex<=0)
	{
		alert("Please select your Month of Birth");
		document.getElementById('dob_mm').focus();
		return false;
	}	
	if(document.getElementById('dob_yy').selectedIndex<=0)
	{
		alert("Please select your Year of Birth");
		document.getElementById('dob_yy').focus();
		return false;
	 }	 
	if(document.getElementById('dob_yy').selectedIndex!=0 && document.getElementById('dob_mm').selectedIndex!=0 && document.getElementById('dob_dd').selectedIndex!=0)
	{
		date=document.getElementById('dob_dd').options[document.getElementById('dob_dd').selectedIndex].text;
		month=document.getElementById('dob_mm').options[document.getElementById('dob_mm').selectedIndex].value;
		year=document.getElementById('dob_yy').options[document.getElementById('dob_yy').selectedIndex].text;
		if(year % 4 == 0)
		{
			if(month ==02 && date >29)
			{
			  alert("Please select a valid Date of Birth ");
				document.getElementById('dob_dd').focus();
				return false;
			}
		}
		else if(month ==02 && date > 28)
		{
		  	alert("Please select a valid Date of Birth ");
			document.getElementById('dob_dd').focus();
			return false;
		}
		if(month ==04 || month ==06 || month ==09 || month ==11)
		{
			if(date >30)
			{
			  alert("Please select a valid Date of Birth ");
			  document.getElementById('dob_dd').focus();
			   return false;
			}
		}
		
		var currentdate = new Date();
		var curday = currentdate.getDate();
		var curmon = currentdate.getMonth() + 1;
		var curyear =currentdate.getFullYear();
		var calday = date;
		var calmon = month;
		var calyear = year;
		if(curday == "" || curmon=="" || curyear=="" || calday=="" || calmon=="" || calyear=="")
		{
			alert("please fill all the values and click go -");
		}	
		else
		{
			var curd = new Date(curyear,curmon-1,curday);
			var cald = new Date(calyear,calmon-1,calday);
			var diff =  Date.UTC(curyear,curmon,curday,0,0,0)
			 - Date.UTC(calyear,calmon,calday,0,0,0);
			var dife = datediff(curd,cald);
			//alert(curd+"--"+cald);
			var ageCur = dife[0];
			var ageMonth = dife[1];
			var ageDay = dife[2];
			if(ageCur < 23)
			{
				DobFailed = true;				
			}
			/*if(ageCur >= 23 && ageCur < 25)
			{
				Dob2Failed = true;				
			}*/
			if(ageCur > 65)
			{
				DobFailed = true;				
			}
			if(ageCur == 65)
			{
				if((ageMonth != 0) || (ageDay != 0))
				{
				}
			}
		}
	}
	
	if((trimSpace(document.getElementById('Mobile').value)=='') || (document.getElementById('Mobile').value==""))
	{
		    alert("Please enter your Mobile Number");
			document.getElementById('Mobile').focus();
			document.getElementById('Mobile').select();
			return false;
	}
	if(!numberValidate(document.getElementById('Mobile').value,''))
	{
		alert("Please enter a valid Mobile Number");
		document.getElementById('Mobile').focus();
		document.getElementById('Mobile').select();
		return false;
	}
	if(document.getElementById('Mobile').value.length!=10 || (document.getElementById('Mobile').value.charAt(0)!=9 && document.getElementById('Mobile').value.charAt(0)!=8  && document.getElementById('Mobile').value.charAt(0)!=7))
	{
		alert("Please enter a valid Mobile Number");
		document.getElementById('Mobile').focus();
		document.getElementById('Mobile').select();
		return false;
	}
	if((document.getElementById('Mobile').value==7777777777) || (document.getElementById('Mobile').value==8888888888) || (document.getElementById('Mobile').value==9999999999))
		 	 {
			alert("Please enter a valid Mobile Number")
			document.getElementById('Mobile').focus()
			document.getElementById('Mobile').select()
			return false
			}
	var emailexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+)\.(([a-zA-Z]{2,}|[0-9]{2,})|([a-zA-Z]{2,}\.[a-zA-Z]{2,})|([a-zA-Z]{2,}\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}))$/;
	if((trimSpace(document.getElementById('Email_Id').value)=='')|| (document.getElementById('Email_Id').value==''))
	{
		    alert("Please enter your E-mail Id");
			document.getElementById('Email_Id').focus();
			document.getElementById('Email_Id').select();
			return false;
	}
	if(emailexp.test(document.getElementById('Email_Id').value)==false) 
	{
		alert("Please enter a valid E-mail Id");
		document.getElementById('Email_Id').focus();
		document.getElementById('Email_Id').select();
		return false;
	} 
	var val1=document.getElementById('Pan_no').value.substring(0,5);
	 var val2=document.getElementById('Pan_no').value.substring(5,9);
	 var val3=document.getElementById('Pan_no').value.substring(9);
	 var val4=document.getElementById('Pan_no').value.substring(3,4);
	if((trimSpace(document.getElementById('Pan_no').value)=="") || (document.getElementById('Pan_no').value==""))
	  {
		alert("Please enter your PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	  }	 
	if(!alphaValidatePAN(val1,''))
	{
		alert("Please enter a valid PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	}
	if(!numberValidate(val2,''))
	{
		alert("Please enter a valid PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	}
	if(val2==0)
	{
		alert("Please enter a valid PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	}
	if(!alphaValidatePAN(val3,''))
	{
		alert("Please enter a valid PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	}
	if(document.getElementById('Pan_no').value.length<10)
	{
		alert("Please enter a valid PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	}
	if(document.getElementById('Pan_no').value.charAt(3)!='p' && document.getElementById('Pan_no').value.charAt(3)!='P')
	{
		alert("Please enter a valid PAN Number");
		document.getElementById('Pan_no').focus();
		document.getElementById('Pan_no').select();
		return false;
	}
	if(document.getElementById('Education').selectedIndex<=0)
	{
		alert("Please select your Education Qualification");
		document.getElementById('Education').focus();
		return false;
	}
	
	if(trimSpace(document.getElementById('OFF_NAME').value)==''||document.getElementById('OFF_NAME').value=='')
	{
		alert("Please enter your Company Name");
		document.getElementById('OFF_NAME').focus();
		document.getElementById('OFF_NAME').select();
		return false;
	}
	if(!special_validation(document.getElementById('OFF_NAME').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('OFF_NAME').focus();
		document.getElementById('OFF_NAME').select();
		return false;
	}	
	
	if(document.getElementById('OFF_NAME').value==0)
	{
		alert("Invalid data");
		document.getElementById('OFF_NAME').focus();
		document.getElementById('OFF_NAME').select();
		return false;
	}	
	if(document.getElementById('PROFESSION').selectedIndex<=0)
	{
		alert("Please select your Profession");
		document.getElementById('PROFESSION').focus();
		return false;
	}
	
	if(document.getElementById('Designation').selectedIndex<=0)
	{
		alert("Please select your Designation")
		document.getElementById('Designation').focus()
		return false;
	}
	if(document.getElementById('Designation').value =='Others')
	{
		if(trimSpace(document.getElementById('OtherDesignation').value)=='' || document.getElementById('OtherDesignation').value =='Others' )
		{
		alert("Please enter your Designation")
		document.getElementById('OtherDesignation').focus()
		document.getElementById('OtherDesignation').select()
		return false;
		}
		if(!special_validation(document.getElementById('OtherDesignation').value,''))
		{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('OtherDesignation').focus();
		document.getElementById('OtherDesignation').select();
		return false;
		}
		if(document.getElementById('OtherDesignation').value==0)
		{
		alert("Invalid data")
		document.getElementById('OtherDesignation').focus()
		document.getElementById('OtherDesignation').select()
		return false;
		}
	}
	
	if((trimSpace(document.getElementById('Annual_Income').value)=="") || (document.getElementById('Annual_Income').value==""))
		{
			alert("Please enter your Gross Annual Income");
			document.getElementById('Annual_Income').focus();
			document.getElementById('Annual_Income').select();
			return false;
		}			
		if(document.getElementById('Annual_Income').value==0 )
		{
			alert("Please enter a valid Gross Annual Income");
			document.getElementById('Annual_Income').focus();
			document.getElementById('Annual_Income').select();
			return false;
		}
		
		if(!numberValidate(document.getElementById('Annual_Income').value,''))
		{
			alert("Please enter a valid Gross Annual Income");
			document.getElementById('Annual_Income').focus();
			document.getElementById('Annual_Income').select();
			return false;
		}
		
		if((document.getElementById('Nationality1').checked == false) && (document.getElementById('Nationality2').checked == false))
	{
		alert("Please select your Nationality");
		document.getElementById('Nationality1').focus();
		return false;
	}
	  
	
	return true;
}
	function validateFieldPart1(focusvalue)
	{
		if(!common_validate(focusvalue))
		{
			return false;
		}
		//var orderid = SaveShortLead();
		//document.getElementById('orderID').value = orderid;	
		step2();
		return false;
	}
	
	function SaveShortLead() {
    var xmlHttp;
    XmlHttp = getXMLHTTP();

    if (XmlHttp) {
        XmlHttp.open("POST", 'SaveLead/SaveExcel.aspx?val=3',  false);
		XmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		document.frmsuviocrlp.Agency_Code.value=getParameter("agencyCode");
		  document.frmsuviocrlp.Campaign_Code.value=getParameter("campaignCode");
		  document.frmsuviocrlp.Creative.value=getParameter("creative");
		  document.frmsuviocrlp.Product_Code.value=getParameter("productCode");
		  document.frmsuviocrlp.Section.value=getParameter("section");
		  document.frmsuviocrlp.Site.value=getParameter("site");
		  document.frmsuviocrlp.externalOfferCode.value=getParameter("eOfferCode");
		var Fname = document.getElementById('FirstName').value;
		var Mname = document.getElementById('MiddleName').value;
		var Lname = document.getElementById('LastName').value;
		var phone = document.getElementById('Mobile').value;
		var email = document.getElementById('Email_Id').value;
		var Title = document.getElementById('Title').value;
		var DOB_d = document.getElementById('dob_dd').value 
		var DOB_m = document.getElementById('dob_mm').value 
		var DOB_y = document.getElementById('dob_yy').value;
		var company = document.getElementById('OFF_NAME').value;
		var income = document.getElementById('Annual_Income').value;
		var desig = document.getElementsByName('Designation')[0].value;
		var otherdesig = document.getElementById('OtherDesignation').value;
		var profession = document.getElementById('PROFESSION').value;
		var Pan_no = document.getElementById('Pan_no').value;
		var cardname = document.getElementById('Card_Name').value;
		document.frmsuviocrlp.externalOfferCode.value=getParameter("eOfferCode");
		var offer = document.getElementsByName('externalOfferCode')[0].value;
		var site = document.getElementsByName('Site')[0].value;
		var creative = document.getElementsByName('Creative')[0].value;
		var section = document.getElementsByName('Section')[0].value;
		var agency = document.getElementsByName('Agency_Code')[0].value;
		var campaign = document.getElementsByName('Campaign_Code')[0].value;
		var product = document.getElementsByName('Product_Code')[0].value;
		var source = document.getElementsByName('Source_Id')[0].value;
		var country = document.getElementsByName('Nationality')[0].value;
		
		
		
		XmlHttp.send("Validate=true&short=yes"+"&FirstName="+Fname+"&MiddleName="+Mname+"&LastName="+Lname+"&Mobile="+phone+"&Email_Id="+email+"&Title="+Title+"&dob_dd="+DOB_d+"&dob_mm="+DOB_m+"&dob_yy="+DOB_y+"&OFF_NAME="+company+"&Annual_Income="+income+"&Pan Card Number="+Pan_no+"&form_id=frmsuviocrlpshortlead"+"&externalOfferCode="+offer+"&Site="+site+"&Creative="+creative+"&Section="+section+"&Agency_Code="+agency+"&Campaign_Code="+campaign+"&Product_Code="+product+"&Source_Id="+source+"&Nationality="+country+"&PROFESSION="+profession +"&Designation="+desig+"&OtherDesignation="+otherdesig+"&Card_Name="+cardname);
		
		XmlHttp.responseText;
		if (XmlHttp.readyState == 4) {
		if (XmlHttp.status == 200) {
			var orderID = XmlHttp.responseText;
			return orderID;
			}
		}
    } 
}

function getXMLHTTP() {
    var A = null;
    try {
        A = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
        try {
            A = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (oc) {
            A = null;
        }
    }
    if (!A && typeof XMLHttpRequest != "undefined") {
        A = new XMLHttpRequest();
    }
    return A;
}

	function common_validate2()
	{
	if((document.getElementById('Residence_Door').value=='') || trimSpace(document.getElementById('Residence_Door').value)=="")
	{
		alert("Please enter your Residence Door / House No.");
		document.getElementById('Residence_Door').focus();
		document.getElementById('Residence_Door').select();
		return false;
	}
	if(!special_validation(document.getElementById('Residence_Door').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Residence_Door').focus();
		document.getElementById('Residence_Door').select();
		return false;
	}
	
	if(numberValidate2(document.getElementById('Residence_Door').value,''))
	{
		alert("Please fill in your 'Residence Door / House No.' with at least one NUMBER in it.");
		document.getElementById('Residence_Door').focus();
		document.getElementById('Residence_Door').select();
		return false;
	}
	if((document.getElementById('Residence_Street_Name').value=='') || trimSpace(document.getElementById('Residence_Street_Name').value)=="")	
	{
		alert("Please enter your Residence Street / Road Name");
		document.getElementById('Residence_Street_Name').focus();
		document.getElementById('Residence_Street_Name').select();
		return false;
	}
	if(!special_validation(document.getElementById('Residence_Street_Name').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Residence_Street_Name').focus();
		document.getElementById('Residence_Street_Name').select();
		return false;
	}		
	if(document.getElementById('Residence_Street_Name').value==0)
	{
		alert("Invalid Street / Road Name");
		document.getElementById('Residence_Street_Name').focus();
		document.getElementById('Residence_Street_Name').select();
		return false;
	}
	if((document.getElementById('Residence_area').value=='') || trimSpace(document.getElementById('Residence_area').value)=="")	
	{
		alert("Please enter your Residence Area / Locality");
		document.getElementById('Residence_area').focus();
		document.getElementById('Residence_area').select();
		return false;
	}
	if(!special_validation(document.getElementById('Residence_area').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Residence_area').focus();
		document.getElementById('Residence_area').select();
		return false;
	}		
	if(document.getElementById('Residence_area').value==0)
	{
		alert("Invalid Area / Locality");
		document.getElementById('Residence_area').focus();
		document.getElementById('Residence_area').select();
		return false;
	}
	if((document.getElementById('Residence_landmark').value=='') || trimSpace(document.getElementById('Residence_landmark').value)=="")	
	{
		alert("Please enter the closest Landmark to your residence");
		document.getElementById('Residence_landmark').focus();
		document.getElementById('Residence_landmark').select();
		return false;
	}
	if(!special_validation(document.getElementById('Residence_landmark').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Residence_landmark').focus();
		document.getElementById('Residence_landmark').select();
		return false;
	}		
	if(document.getElementById('Residence_landmark').value==0)
	{
		alert("Invalid Landmark");
		document.getElementById('Residence_landmark').focus();
		document.getElementById('Residence_landmark').select();
		return false;
	} 
	if(document.getElementById('Residence_City').selectedIndex<=0)
	{
		alert("Please select your Residence City");
		document.getElementById('Residence_City').focus();
		return false;
	}
	if((document.getElementById('Residence_pin_code').value=='') || trimSpace(document.getElementById('Residence_pin_code').value)=="")
	{
		alert("Please enter your Residence Pincode");
		document.getElementById('Residence_pin_code').focus();
		document.getElementById('Residence_pin_code').select();
		return false;
	}	
	if(!numberValidate(document.getElementById('Residence_pin_code').value,''))
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Residence_pin_code').focus();
		document.getElementById('Residence_pin_code').select();
		return false;
	}
	if(document.getElementById('Residence_pin_code').value.length<6)
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Residence_pin_code').focus();
		document.getElementById('Residence_pin_code').select();
		return false;
	}
	if(document.getElementById('Residence_pin_code').value==0 || document.getElementById('Residence_pin_code').value.charAt(0)==0)
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Residence_pin_code').focus();
		document.getElementById('Residence_pin_code').select();
		return false;
	}
	var resCityName = document.getElementById('Residence_City').options[document.getElementById('Residence_City').selectedIndex].value;
	var resCityPin = validateCityPin(resCityName,'Residence_pin_code');
	if(resCityPin == false)
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Residence_pin_code').focus();
		document.getElementById('Residence_pin_code').select();
		return false;
	}
	if(trimSpace(document.getElementById('STD_Code').value)!="" && document.getElementById('STD_Code').value!="STD Code")
	   {
			if(!numberValidate(document.getElementById('STD_Code').value,''))
			   {
				 alert("Please enter a valid STD Code");
				 document.getElementById('STD_Code').focus();
				 document.getElementById('STD_Code').select();
				 return false;
			   } 
			if(document.getElementById('STD_Code').value.length<3 || document.getElementById('STD_Code').value.length>5)
			   {
				 alert("Please enter a valid STD Code");
				 document.getElementById('STD_Code').focus();
				 document.getElementById('STD_Code').select();
				 return false
			   } 
			     if(document.getElementById('STD_Code').value==0 || document.getElementById('STD_Code').value.charAt(0)!=0)
				  {
					alert("Please enter a valid STD Code");
					document.getElementById('STD_Code').focus();
					document.getElementById('STD_Code').select();
					return false;
	  			}
	 }	
	 if(!(document.getElementById('Home_Phone').value==""))
	 {
		if(document.getElementById('Home_Phone').value==0)
		 	 {
			alert("Please enter a valid Home landline Number")
			document.getElementById('Home_Phone').focus()
			document.getElementById('Home_Phone').select()
			return false
			}
		   if(!numberValidate(document.getElementById('Home_Phone').value,''))
			{
				alert("Please enter a valid Home landline Number")
				document.getElementById('Home_Phone').focus()
				document.getElementById('Home_Phone').select()
				return false
			}
			if(document.getElementById('Home_Phone').value.length<7||document.getElementById('Home_Phone').value.length>8 || document.getElementById('Home_Phone').value.charAt(0)==0 || document.getElementById('Home_Phone').value.charAt(0)==1 || document.getElementById('Home_Phone').value.charAt(0)==5 || document.getElementById('Home_Phone').value.charAt(0)==7 || document.getElementById('Home_Phone').value.charAt(0)==8 || document.getElementById('Home_Phone').value.charAt(0)==9)
	{
		alert("Please enter a valid Residence Landline Number")
		document.getElementById('Home_Phone').focus()
		document.getElementById('Home_Phone').select()
		return false
	}
	if((document.getElementById('Home_Phone').value==22222222) || (document.getElementById('Home_Phone').value==33333333) || (document.getElementById('Home_Phone').value==44444444) || (document.getElementById('Home_Phone').value==66666666))
		 	 {
			alert("Please enter a valid Residence landline Number")
			document.getElementById('Home_Phone').focus()
			document.getElementById('Home_Phone').select()
			return false
			}
			
	}			
	return true;
}
	function validateFieldPart2(focusvalue)
	{
		if(!common_validate2(focusvalue))
		{
			return false;
		}
		step3();
	return false;
	}
	
	function common_validate3()
	{	
	if((document.getElementById('Office_Door').value=='') || trimSpace(document.getElementById('Office_Door').value)=="")
	{
		alert("Please enter your Office Door / Block / Plot No.");
		document.getElementById('Office_Door').focus();
		document.getElementById('Office_Door').select();
		return false;
	}
	
	if((document.getElementById('Office_Door').value!==""))
	{
		var rdoor =document.getElementById('Residence_Door').value;
		var odoor =document.getElementById('Office_Door').value;
		var thenum = rdoor.match(/\d/g);
		var thenum1 = odoor.match(/\d/g);
		thenum = thenum.join("");
		thenum1 = thenum1.join("");
		if(thenum==thenum1)
			{
			alert("The official address needs to be different from the Residence address.");
			document.getElementById('Office_Door').focus();
			document.getElementById('Office_Door').select();
			return false;
			}
	}
		if((document.getElementById('Office_Door').value==document.getElementById('Residence_Door').value))
	{
		alert("The official address needs to be different from the Residence address.");
		document.getElementById('Office_Door').focus();
		document.getElementById('Office_Door').select();
		return false;
	}
	if(!special_validation(document.getElementById('Office_Door').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Office_Door').focus();
		document.getElementById('Office_Door').select();
		return false;
	}		
	if(document.getElementById('Office_Door').value==0)
	{
		alert("Invalid Door / Block / Plot No.");
		document.getElementById('Office_Door').focus();
		document.getElementById('Office_Door').select();
		return false;
	}
	if((document.getElementById('Office_Street_Name').value=='') || trimSpace(document.getElementById('Office_Street_Name').value)=="")
	{
		alert("Please enter your Office Street / Road Name");
		document.getElementById('Office_Street_Name').focus();
		document.getElementById('Office_Street_Name').select();
		return false;
	}
	if(!special_validation(document.getElementById('Office_Street_Name').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Office_Street_Name').focus();
		document.getElementById('Office_Street_Name').select();
		return false;
	}		
	if(document.getElementById('Office_Street_Name').value==0)
	{
		alert("Invalid Street / Road Name");
		document.getElementById('Office_Street_Name').focus();
		document.getElementById('Office_Street_Name').select();
		return false;
	}
	if((document.getElementById('Office_Street_Name').value==document.getElementById('Residence_Street_Name').value))
	{
		alert("The official Street / Road Name needs to be different from the Residence Street / Road Name.");
		document.getElementById('Office_Street_Name').focus();
		document.getElementById('Office_Street_Name').select();
		return false;
	}
	if((document.getElementById('Office_area').value=='') || trimSpace(document.getElementById('Office_area').value)=="")
	{
		alert("Please enter your Office Area / Locality");
		document.getElementById('Office_area').focus();
		document.getElementById('Office_area').select();
		return false;
	}
	if(!special_validation(document.getElementById('Office_area').value,''))
	{
		alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		document.getElementById('Office_area').focus();
		document.getElementById('Office_area').select();
		return false;
	}		
	if(document.getElementById('Office_area').value==0)
	{
		alert("Invalid Area / Locality");
		document.getElementById('Office_area').focus();
		document.getElementById('Office_area').select();
		return false;
	}
	if(!(document.getElementById('Office_landmark').value==""))
	{
		if(!special_validation(document.getElementById('Office_landmark').value,''))
		{
			alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
			document.getElementById('Office_landmark').focus();
			document.getElementById('Office_landmark').select();
			return false;
		}		
		if(document.getElementById('Office_landmark').value==0)
		{
			alert("Invalid Landmark");
			document.getElementById('Office_landmark').focus();
			document.getElementById('Office_landmark').select();
			return false;
		}
	}
		if(document.getElementById('Office_City').selectedIndex<=0)
	{
		alert("Please select your Office City");
		document.getElementById('Office_City').focus();
		return false;
	}
	var resCity = document.getElementById('Residence_City').options[document.getElementById('Residence_City').selectedIndex].value;
	var offCity = document.getElementById('Office_City').options[document.getElementById('Office_City').selectedIndex].value;

	if((((resCity == 'Delhi') || (resCity == 'Faridabad') || (resCity == 'Ghaziabad') || (resCity == 'Gurgaon') || (resCity == 'Noida')) && ((offCity == 'Delhi') || (offCity == 'Faridabad') || (offCity == 'Ghaziabad') || (offCity == 'Gurgaon') || (offCity == 'Noida'))) || (((resCity == 'Hyderabad') || (resCity == 'Secunderabad')) && ((offCity == 'Hyderabad') || (offCity == 'Secunderabad'))) || (((resCity == 'Mumbai') || (resCity == 'NaviMumbai')) && ((offCity == 'Mumbai') || (offCity == 'NaviMumbai'))))
	{
	}
	else if(resCity != offCity)	
	{
		alert("Please Check! Your City of Work & Residence should be the same");
		document.getElementById('Office_City').focus();
		return false;
	}
	if((document.getElementById('Office_Pin_Code').value=='') || trimSpace(document.getElementById('Office_Pin_Code').value)=="")
	{
		alert("Please enter your Office Pincode");
		document.getElementById('Office_Pin_Code').focus();
		document.getElementById('Office_Pin_Code').select();
		return false;
	}	
	if(!numberValidate(document.getElementById('Office_Pin_Code').value,''))
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Office_Pin_Code').focus();
		document.getElementById('Office_Pin_Code').select();
		return false;
	}
	if(document.getElementById('Office_Pin_Code').value.length<6)
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Office_Pin_Code').focus();
		document.getElementById('Office_Pin_Code').select();
		return false;
	}
    if(document.getElementById('Office_Pin_Code').value==0 ||document.getElementById('Office_Pin_Code').value.charAt(0)==0)
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Office_Pin_Code').focus();
		document.getElementById('Office_Pin_Code').select();
		return false;
	}
	var offCityPin = validateCityPin(offCity,'Office_Pin_Code');
	if(offCityPin == false)
	{
		alert("Please enter a valid Pincode");
		document.getElementById('Office_Pin_Code').focus();
		document.getElementById('Office_Pin_Code').select();
		return false;
	}
	
	if(trimSpace(document.getElementById('Office_Std_Code').value)=="" || document.getElementById('Office_Std_Code').value=="STD Code")
	{
		alert("Please enter your Office Phone STD Code");
		document.getElementById('Office_Std_Code').focus();
		document.getElementById('Office_Std_Code').select();
		return false;
	}	
	if(!numberValidate(document.getElementById('Office_Std_Code').value,''))
	   {
		 alert("Please enter a valid STD Code");
		 document.getElementById('Office_Std_Code').focus();
		 document.getElementById('Office_Std_Code').select();
		 return false;
	   } 
	if(document.getElementById('Office_Std_Code').value.charAt(0)!=0)
	{
			alert("Please enter a valid STD Code");
			document.getElementById('Office_Std_Code').focus();
			document.getElementById('Office_Std_Code').select();
			return false;
	}   
	if(document.getElementById('Office_Std_Code').value.length<3||document.getElementById('Office_Std_Code').value.length>5)
	   {
		 alert("Please enter a valid STD Code");
		 document.getElementById('Office_Std_Code').focus();
		 document.getElementById('Office_Std_Code').select();
		 return false;
	   } 
	 if(document.getElementById('Office_Std_Code').value==0)
	  {
		alert("Please enter a valid STD Code");
		document.getElementById('Office_Std_Code').focus();
		document.getElementById('Office_Std_Code').select();
		return false;
	}
	if(!(document.getElementById('Office_Phone').value==""))
	 {
	if(document.getElementById('Office_Phone').value==0)
	  {
		alert("Please enter a valid Office Landline Number")
		document.getElementById('Office_Phone').focus()
		document.getElementById('Office_Phone').select()
		return false
	}
   if(!numberValidate(document.getElementById('Office_Phone').value,''))
	{
		alert("Please enter a valid Office Landline Number")
		document.getElementById('Office_Phone').focus()
		document.getElementById('Office_Phone').select()
		return false
	}
	if(document.getElementById('Office_Phone').value.length<7||document.getElementById('Office_Phone').value.length>8 || document.getElementById('Office_Phone').value.charAt(0)==0 || document.getElementById('Office_Phone').value.charAt(0)==1 || document.getElementById('Office_Phone').value.charAt(0)==5 || document.getElementById('Office_Phone').value.charAt(0)==7 || document.getElementById('Office_Phone').value.charAt(0)==8 || document.getElementById('Office_Phone').value.charAt(0)==9)
			{
				alert("Please enter a valid Office landline Number")
				document.getElementById('Office_Phone').focus()
				document.getElementById('Office_Phone').select()
				return false
			}
			if((document.getElementById('Office_Phone').value==22222222) || (document.getElementById('Office_Phone').value==33333333) || (document.getElementById('Office_Phone').value==44444444) || (document.getElementById('Office_Phone').value==66666666))
		 	 {
			alert("Please enter a valid Office landline Number")
			document.getElementById('Office_Phone').focus()
			document.getElementById('Office_Phone').select()
			return false
			}
	 }
	
	if((document.getElementById('Office_Phone').value=="") && (document.getElementById('Home_Phone').value==""))
	{
		alert("Please enter your Office Landline or Residence Landline Number")
		document.getElementById('Office_Phone').focus()
		document.getElementById('Office_Phone').select()
		return false
	}	
	
	if((document.getElementById('dnd1').checked==false)&&(document.getElementById('dnd2').checked==false))
	{
	alert("Please let us know whether you wish to be contacted for marketing offers");
	document.getElementById('dnd1').focus();
		return false
	}
	
	if(document.getElementById('Authorization').checked==false)
	{
		alert("Do you accept the Authorisation Statement and Terms & Conditions?");
		document.getElementById('Authorization').focus();
		return false;
	}
	
	if((document.getElementById('director1').checked==true))
	{
		if(trimSpace(document.getElementById('directorName').value)=="")
		{
			alert("Please enter the Name of the Director of Citibank NA or other bank / Senior Officer of Citibank NA")
			document.getElementById('directorName').focus()
			document.getElementById('directorName').select()
			return false
		}
		if(!textValidate(document.getElementById('directorName').value,''))
		{
			alert("Please enter the Name of the Director of Citibank NA or other bank / Senior Officer of Citibank NA (Alphabets only)")
			document.getElementById('directorName').focus()
			document.getElementById('directorName').select()
			return false
		}
		if(trimSpace(document.getElementById('otherBank').value)=="")
		{
			alert("Please enter the Name of the other bank / Position with other bank")
			document.getElementById('otherBank').focus()
			document.getElementById('otherBank').select()
			return false
		}
		if(!textValidate(document.getElementById('otherBank').value,''))
		{
			alert("Please enter the Name of the other bank / Position with other bank (Alphabets only)")
			document.getElementById('otherBank').focus()
			document.getElementById('otherBank').select()
			return false
		}
		if(trimSpace(document.getElementById('relationship').value)=="")
		{
			alert("Please enter the Relationship")
			document.getElementById('relationship').focus()
			document.getElementById('relationship').select()
			return false
		}
		if(!textValidate(document.getElementById('relationship').value,''))
		{
			alert("Please enter the Relationship (Alphabets only)")
			document.getElementById('relationship').focus()
			document.getElementById('relationship').select()
			return false
		}
	}
	
	
	return true;
}
	function validateFieldPart3(focusvalue)
	{
		if(!common_validate3(focusvalue))
		{
			return false;
		}
		function dataval()	
		{
		  document.frmsuviocrlp.Agency_Code.value=getParameter("agencyCode");
		  document.frmsuviocrlp.Campaign_Code.value=getParameter("campaignCode");
		  document.frmsuviocrlp.Creative.value=getParameter("creative");
		  document.frmsuviocrlp.Product_Code.value=getParameter("productCode");
		  document.frmsuviocrlp.Section.value=getParameter("section");
		  document.frmsuviocrlp.Site.value=getParameter("site");
		  document.frmsuviocrlp.externalOfferCode.value=getParameter("eOfferCode");
		  document.getElementById('txtHndValue').value = "1";
		}
		
	var professionVal = document.getElementById('PROFESSION').options[document.getElementById('PROFESSION').selectedIndex].value;
	if((document.getElementById('Nationality2').checked==true) || (eval(document.getElementById('Annual_Income').value) < 240000) || (DobFailed == true))
	{
		 document.getElementById('Office_Std_Code').disabled = false;
		document.getElementById('STD_Code').disabled = false;
		dataval();
		document.frmsuviocrlp.form_id.value="frmrejsuviocrlp";
		validateFieldsEmpty();
		//document.getElementById('frmsuviocrlp').action ="https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-thank-you-prescreening.htm";
		document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-thank-you-prescreening.htm';
		document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
		document.frmsuviocrlp.submit();		
	}
	else if(document.getElementById('Residence_City').value == 'Baroda')
    {
		document.getElementById('Office_Std_Code').disabled = false;
			document.getElementById('STD_Code').disabled = false;
			dataval();
			document.frmsuviocrlp.form_id.value="frmshosuviocrlp";
			validateFieldsEmpty();
		//	document.getElementById('frmsuviocrlp').action = "https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm";
			document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm';
		document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
			document.frmsuviocrlp.submit();
	}	
		else if((document.getElementById('Residence_City').value == 'Faridabad') && (document.getElementById('Office_City').value == 'Faridabad') || (document.getElementById('Residence_City').value == 'Faridabad') && (document.getElementById('Office_City').value == 'Ghaziabad') || (document.getElementById('Residence_City').value == 'Ghaziabad') && (document.getElementById('Office_City').value == 'Ghaziabad') || (document.getElementById('Residence_City').value == 'Ghaziabad') && (document.getElementById('Office_City').value == 'Faridabad'))
    {
		document.getElementById('Office_Std_Code').disabled = false;
		document.getElementById('STD_Code').disabled = false;
		dataval();
		document.frmsuviocrlp.form_id.value="frmrejsuviocrlp";
		validateFieldsEmpty();
		//document.getElementById('frmsuviocrlp').action ="https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-thank-you-prescreening.htm";
		document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-thank-you-prescreening.htm';
		document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
		document.frmsuviocrlp.submit();	
	}
	else if(professionVal == 'Self_employed') {
		if(eval(document.getElementById('Annual_Income').value) < 500000)
	{
	 document.getElementById('Office_Std_Code').disabled = false;
		document.getElementById('STD_Code').disabled = false;
		dataval();
		document.frmsuviocrlp.form_id.value="frmrejsuviocrlp";
		validateFieldsEmpty();
	//	document.getElementById('frmsuviocrlp').action = "https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-thank-you-prescreening.htm";
		document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/stp-thank-you-prescreening.htm';
		document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
		document.frmsuviocrlp.submit();		
	}
		if(eval(document.getElementById('Annual_Income').value) >= 500000){
		 document.getElementById('Office_Std_Code').disabled = false;
		document.getElementById('STD_Code').disabled = false;
			dataval();
			document.frmsuviocrlp.form_id.value="frmsho2suviocrlp";
			validateFieldsEmpty();
		//	document.getElementById('frmsuviocrlp').action = "https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm";
				document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm';
		document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
			document.frmsuviocrlp.submit();
		}
	}
	else if(professionVal == 'Salaried')
	{
		/*if(Dob2Failed == true)
		{
			document.getElementById('Office_Std_Code').disabled = false;
			document.getElementById('STD_Code').disabled = false;
			dataval();
			document.frmsuviocrlp.form_id.value="frmshosuviocrlp";
			validateFieldsEmpty();
		//	document.getElementById('frmsuviocrlp').action = "https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm";
			document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm';
		document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
			document.frmsuviocrlp.submit();
				return true;
		}*/
		if((eval(document.getElementById('Annual_Income').value) < 300000) && (eval(document.getElementById('Annual_Income').value) >= 240000))
		{
			 document.getElementById('Office_Std_Code').disabled = false;
		document.getElementById('STD_Code').disabled = false;
			dataval();
			document.frmsuviocrlp.form_id.value="frmshosuviocrlp";
			validateFieldsEmpty();
		//	document.getElementById('frmsuviocrlp').action = "https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm";
			document.getElementById('redirectURL').value = 'https://www.online.citibank.co.in/portal/newgen/cards/tab/ioc-shortlead-thankyou.htm';
			document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
			document.frmsuviocrlp.submit();
		}
		else if(eval(document.getElementById('Annual_Income').value) >= 300000) 
		{
			 document.getElementById('Office_Std_Code').disabled = false;
		document.getElementById('STD_Code').disabled = false;
			dataval();
			document.frmsuviocrlp.form_id.value="frmfulsuviocrlp";
			validateFieldsEmpty();
		//	document.getElementById('frmsuviocrlp').action = "cards/images/ioc-lite-r-thankyou.htm";
			document.getElementById('redirectURL').value = '../cards/images/ioc-lite-r-thankyou.htm';
			document.frmsuviocrlp.action ='SaveLead/SaveExcel.aspx';
			document.frmsuviocrlp.submit();
		}
	}
	return false;
}

function validateCityPin(offCity,obj)
{
	if(offCity == "Ahmedabad")
	{
		if(document.getElementById(obj).value.substr(0,2)!=38)
		{
			return false;
		}
	}
	else if(offCity == "Baroda")
	{
		if(document.getElementById(obj).value.substr(0,2)!=39)
		{
			return false;
		}
	}
	else if(offCity == "Bengaluru")
	{
		if(document.getElementById(obj).value.substr(0,2)!=56)
		{
			return false;
		}
	}
	else if(offCity == "Chandigarh")
	{
		if((document.getElementById(obj).value.substr(0,2)!=14) && (document.getElementById(obj).value.substr(0,2)!=16))
		{
			return false;
		}
	}
	else if(offCity == "Chennai")
	{
		if(document.getElementById(obj).value.substr(0,2)!=60)
		{
			return false;
		}
	}
	else if(offCity == "Coimbatore")
	{
		if(document.getElementById(obj).value.substr(0,2)!=64)
		{
			return false;
		}
	}
	else if(offCity == "Delhi")
	{
		if(document.getElementById(obj).value.substr(0,2)!=11)
		{
			return false;
		}
	}
	else if(offCity == "Faridabad")
	{
		if(document.getElementById(obj).value.substr(0,2)!=12)
		{
			return false;
		}
	}
	else if(offCity == "Ghaziabad")
	{
		if((document.getElementById(obj).value.substr(0,2)!=20) && (document.getElementById(obj).value.substr(0,2)!=24))
		{
			return false;
		}
	}
	else if(offCity == "Gurgaon")
	{
		if(document.getElementById(obj).value.substr(0,2)!=12)
		{
			return false;
		}
	}
	else if(offCity == "Hyderabad")
	{
		if(document.getElementById(obj).value.substr(0,2)!=50)
		{
			return false;
		}
	}
	else if(offCity == "Kolkata")
	{
		if((document.getElementById(obj).value.substr(0,2)!=70) && (document.getElementById(obj).value.substr(0,2)!=71) && (document.getElementById(obj).value.substr(0,2)!=72) && (document.getElementById(obj).value.substr(0,2)!=73) && (document.getElementById(obj).value.substr(0,2)!=74))
		{
			return false;
		}
	}
	else if(offCity == "Mumbai")
	{
		if((document.getElementById(obj).value.substr(0,2)!=40) && (document.getElementById(obj).value.substr(0,2)!=41) && (document.getElementById(obj).value.substr(0,2)!=42))
		{
			return false;
		}
	}
	else if(offCity == "NaviMumbai")
	{
		if((document.getElementById(obj).value.substr(0,2)!=40) && (document.getElementById(obj).value.substr(0,2)!=41))
		{
			return false;
		}
	}
	else if(offCity == "Noida")
	{
		if(document.getElementById(obj).value.substr(0,2)!=20)
		{
			return false;
		}
	}
	else if(offCity == "Pune")
	{
		if(document.getElementById(obj).value.substr(0,2)!=41)
		{
			return false;
		}
	}
	else if(offCity == "Secunderabad")
	{
		if(document.getElementById(obj).value.substr(0,2)!=50)
		{
			return false;
		}
	}
	
	return true;
}
function openTerms()
{
	if(document.getElementById('Authorization').checked==true)
	{
		window.open("http://www.online.citibank.co.in/portal/newgen/cards/images/nw_BC.pdf","TC","status=1,toolbar=1");
	}
}
function ShowSTDCode(val,obj)
{
	var selCity = val.toLowerCase();
	if(selCity == 'ahmedabad')
	{
		document.getElementById(obj).value = '079';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'baroda')
	{
		document.getElementById(obj).value = '0265';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'bengaluru')
	{
		document.getElementById(obj).value = '080';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'chandigarh')
	{
		document.getElementById(obj).value = '0172';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'chennai')
	{
		document.getElementById(obj).value = '044';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'coimbatore')
	{
		document.getElementById(obj).value = '0422';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'delhi')
	{
		document.getElementById(obj).value = '011';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'faridabad')
	{
		document.getElementById(obj).value = '0129';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'ghaziabad')
	{
		document.getElementById(obj).value = '0120';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'gurgaon')
	{
		document.getElementById(obj).value = '0124';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'hyderabad')
	{
		document.getElementById(obj).value = '040';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'kolkata')
	{
		document.getElementById(obj).value = '033';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'mumbai')
	{
		document.getElementById(obj).value = '022';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'navimumbai')
	{
		document.getElementById(obj).value = '0215';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'noida')
	{
		document.getElementById(obj).value = '0120';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'pune')
	{
		document.getElementById(obj).value = '0212';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'secunderabad')
	{
		document.getElementById(obj).value = '040';
		document.getElementById("STD_Code").disabled = true;
	}
	else if(selCity == 'others')
	{
		document.getElementById(obj).value = 'STD Code';
		document.getElementById("STD_Code").disabled = false;
	}
}
function ShowSTDCode1(val,obj)
{
	var selCity = val.toLowerCase();
	if(selCity == 'ahmedabad')
	{
		document.getElementById(obj).value = '079';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'baroda')
	{
		document.getElementById(obj).value = '0265';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'bengaluru')
	{
		document.getElementById(obj).value = '080';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'chandigarh')
	{
		document.getElementById(obj).value = '0172';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'chennai')
	{
		document.getElementById(obj).value = '044';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'coimbatore')
	{
		document.getElementById(obj).value = '0422';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'delhi')
	{
		document.getElementById(obj).value = '011';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'faridabad')
	{
		document.getElementById(obj).value = '0129';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'ghaziabad')
	{
		document.getElementById(obj).value = '0120';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'gurgaon')
	{
		document.getElementById(obj).value = '0124';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'hyderabad')
	{
		document.getElementById(obj).value = '040';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'kolkata')
	{
		document.getElementById(obj).value = '033';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'mumbai')
	{
		document.getElementById(obj).value = '022';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'navimumbai')
	{
		document.getElementById(obj).value = '0215';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'noida')
	{
		document.getElementById(obj).value = '0120';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'pune')
	{
		document.getElementById(obj).value = '0212';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'secunderabad')
	{
		document.getElementById(obj).value = '040';
		document.getElementById("Office_Std_Code").disabled = true;
	}
	else if(selCity == 'others')
	{
		document.getElementById(obj).value = 'STD Code';
		document.getElementById("Office_Std_Code").disabled = false;
	}
}
function isNum(arg)
{
	var args = arg;

	if (args == "" || args == null || args.length == 0)
	{
		return false;
	}

	args = args.toString();

	for (var i = 0;  i<args.length;  i++)
	{
		if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != ".")
		{
		return false;
		}
	}
	return true;
}
function checkday(aa)
{
	var val = aa.value;
	var valc = val.substring(0,1);

	if(val.length>0 && val.length<3)
	{
		if(!isNum(val) || val == 0)
		{
			aa.value="";
		}
		else if( val < 1 || val > 31)
		{
			aa.value=valc;
		}
	}
	else if(val.length>2)
	{
		val = val.substring(0, 2);
		aa.value=val;
	}
}
function checkmon(aa)
{
	var val = aa.value;
	var valc = val.substring(0,1);

	if(val.length>0 && val.length<3)
	{
		if(!isNum(val) || val == 0)
		{
			aa.value="";
		}
		else if(val < 1 || val > 12)
		{
			aa.value=valc;
		}
	}
	else if(val.length>2)
	{
		val = val.substring(0, 2);
		aa.value=val;
	}
}
function checkyear(aa)
{
	var val = aa.value;
	var valc = val.substring(0,(val.length-1));

	if(val.length>0 && val.length<7)
	{
		if(!isNum(val) || val == 0)
		{
			aa.value=valc;
		}
		else if(val < 1 || val>275759)
		{
			aa.value="";
		}
	}
	else if(val.length>4)
	{
		aa.value=valc;
	}
}
function checkleapyear(datea)
{
	if(datea.getYear()%4 == 0)
	{
		if(datea.getYear()% 10 != 0)
		{
			return true;
		}
		else
		{
			if(datea.getYear()% 400 == 0)
				return true;
			else
				return false;
		}
	}
return false;
}
function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}
function datediff(date1, date2) {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
	 y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();

    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}
function MM_openBrWindow(theURL,winName,features) { 
  window.open(theURL,winName,features);
}
function validateTC(val)
{
	if(val == 'PF')
	{ document.getElementById("txtHndPF").value = '1'; }
	else if(val == 'TC')
	{ document.getElementById("txtHndTC").value = '1'; }
}
function onloadcall()
{
	//common_onloadcall();
	document.frmsuviocrlp.reset();
	return false;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function alpha_numeric(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[^a-zA-Z0-9 ]/g) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;	
}
function validateFieldsEmpty()
{
	if(document.getElementById('MiddleName').value == '')
	{
		document.getElementById('MiddleName').value = "";
	}
}


/* lms.js File */
function getParameter(parmeter)
{
	var sli=""
	
	var a=top.window.location;
	str=new String(a)
	var index = str.indexOf(parmeter);
	if(index!=-1)
	{
		var str1 = str.substring(index);
		var index1 = str1.indexOf("&");
		if (index1 == -1)
			{
				var index = str1.indexOf("=");
				var sli = str1.slice(index+1);
			}
		else
			{
				var index = str1.indexOf("=");
				var sli = str1.slice(index+1,index1);
			}
	}
	//if(sli==""&&parmeter=="eOfferCode")
	//	var sli="eNoref"
//	return sli;

	if(sli=="")
		sli=parmeter;
	if(sli=="eOfferCode")
		sli="eNoref";
	//alert(sli);
	return sli;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function refhideslideshow()
{
document.getElementById('b-scrn').style.display = "none";
document.getElementById('ref').style.display = "none";

}
function refhideslideshow2()
{
document.getElementById('b-scrn').style.display = "none";
document.getElementById('ref2').style.display = "none";
}
function refshowslideshow()
{
document.getElementById('b-scrn').style.display = "inline";
document.getElementById('ref').style.display = "inline";
window.scrollTo(100,0);
if(screen.height == 768)
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-380+"px";
}
else if(screen.height == 8640)
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-430+"px";
}
else if(screen.height == 900)
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-450+"px";
}
else if(screen.height == 1200)
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-600+"px";
}
else if(screen.height == 600)
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-300+"px";
}
else if(screen.height == 1200)
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-600+"px";
}
else
{
document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
document.getElementById('ref').style.top = (screen.height / 2)-380+"px";
}
}
function refshowslideshow2()
{
document.getElementById('b-scrn').style.display = "inline";
document.getElementById('ref2').style.display = "inline";
window.scrollTo(100,0);
if(screen.height == 768)
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-380+"px";
}
else if(screen.height == 864)
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-430+"px";
}
else if(screen.height == 900)
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-450+"px";
}
else if(screen.height == 1200)
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-600+"px";
}
else if(screen.height == 600)
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-300+"px";
}
else if(screen.height == 1200)
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-600+"px";
}
else
{
document.getElementById('ref2').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref2').style.top = (screen.height / 2)-380+"px";
}
}

function refhideslideshow3()
{
document.getElementById('b-scrn').style.display = "none";
document.getElementById('ref3').style.display = "none";
}

function refshowslideshow3()
{
document.getElementById('b-scrn').style.display = "inline";
document.getElementById('ref3').style.display = "inline";
if(screen.height == 768)
{
document.getElementById('ref3').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-380+"px";
}
else if(screen.height == 864)
{
document.getElementById('ref3').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-430+"px";
}
else if(screen.height == 900)
{
document.getElementById('ref3').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-450+"px";
}
else if(screen.height == 1200)
{
document.getElementById('ref3').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-600+"px";
}
else if(screen.height == 600)
{
document.getElementById('ref3').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-100+"px";
}
else if(screen.height == 1200)
{
document.getElementById('ref3').style.left = (screen.width / 2)-380+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-100+"px";
}
else
{
document.getElementById('ref3').style.left = (screen.width / 2)-180+"px";
document.getElementById('ref3').style.bottom = (screen.height / 2)-180+"px";
}
}


var altKey  = false; 
var keyCode = 0; 
function closeSession(evt){ 
   evt = (evt) ? evt : event; 
  
    clickY  = evt.clientY; 
    altKey  = evt.altKey; 
    keyCode = evt.keyCode; 
 	
    if(!evt.clientY){ 
        // Window Closing in FireFox 
        // capturing ALT + F4 
        keyVals = document.getElementById('ffKeyTrap'); 
        if(keyVals.value == 'true115'){ 
			 //alert('close 1'); 
        } 
  
        if(keyVals.value == ''){ 
            // capturing a window close by "X" ? 
            // we have no keycodes 
			// alert('close 2sd'); 
			 if(document.getElementById('txtHndValue').value == 0)
			{
				window.open("https://www.online.citibank.co.in/cards/forms/stp-popup.htm", "popupWindow", "height=550,width=780");
				document.getElementById('txtHndValue').value = "1";
			}
        } 
    } else { 
        // Window Closing in IE 
        // capturing ALT + F4 
        if (altKey == true && keyCode == 115){ 
          //  alert('close 11'); 
        // capturing a window close by "X" 
        } else if(clickY < 0){ 
           // alert('close 12'); 
        // simply leaving the page via a link 
        } else { 
            //alert('close 13'); 
			if(document.getElementById('txtHndValue').value == 0)
			{
				window.open("https://www.online.citibank.co.in/cards/forms/stp-popup.htm", "popupWindow", "height=550,width=780");
				document.getElementById('txtHndValue').value = "1";
				return void(0); 
			}
        } 
    } 
	
	if(document.getElementById('txtHndValue').value == 0)
	{
		window.open("https://www.online.citibank.co.in/cards/forms/stp-popup.htm", "popupWindow", "height=550,width=780");
	}
	
} 
window.onbeforeunload = closeSession;

function step1()
{
	document.getElementById('Personal_details').style.display = 'block';
		document.getElementById('Residence_Address').style.display = 'none';
		document.getElementById('Office_Address').style.display = 'none';
		document.getElementById('submit1').style.display = 'block';
		document.getElementById('submit2').style.display = 'none';
		document.getElementById('submit3').style.display = 'none';
		document.getElementById('txtHndValue').value = "1";
}
function step2()
{
		document.getElementById('Personal_details').style.display = 'none';
		document.getElementById('Residence_Address').style.display = 'block';
		document.getElementById('Office_Address').style.display = 'none';
		document.getElementById('submit1').style.display = 'none';
		document.getElementById('submit2').style.display = 'block';
		document.getElementById('submit3').style.display = 'none';
		document.getElementById('txtHndValue').value = "1";
}
function step3()
{
		document.getElementById('Personal_details').style.display = 'none';
		document.getElementById('Residence_Address').style.display = 'none';
		document.getElementById('Office_Address').style.display = 'block';
		document.getElementById('submit1').style.display = 'none';
		document.getElementById('submit2').style.display = 'none';
		document.getElementById('submit3').style.display = 'block';
}
function otherdes(nameSelect)
{
    if(nameSelect)
	{
        admOptionValue = document.getElementById("admOption").value;
        if(admOptionValue == nameSelect.value)
		{
            document.getElementById("admDivCheck").style.display = "block";
			document.getElementById('OtherDesignation').focus()
			document.getElementById('OtherDesignation').select()
		}
		
        else
		{
            document.getElementById("admDivCheck").style.display = "none";
        }
    }
    else
	{
        document.getElementById("admDivCheck").style.display = "none";
    }
}