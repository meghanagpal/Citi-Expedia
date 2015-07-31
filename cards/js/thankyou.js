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
function trimSpace(x)
{
	var emptySpace = / /g;
	var trimAfter = x.replace(emptySpace,"");
	return(trimAfter);
}
function special_validation(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(/[^a-zA-Z0-9.,\/ ]/g) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;	
}

function sugg_validate()
{
	if((document.getElementById('navigate1').checked==false)&&(document.getElementById('navigate2').checked==false))
	{
	  alert("Please let us know if it was easy for you to navigate the page");
	  document.getElementById('navigate1').focus();
	  return false;
	}
	if((document.getElementById('easy_to_fill1').checked==false)&&(document.getElementById('easy_to_fill2').checked==false))
	{
	  alert("Please let us know if you found it easy to fill the form");
	  document.getElementById('easy_to_fill1').focus();
	  return false;
	}
	if((document.getElementById('save_the_form1').checked==false)&&(document.getElementById('save_the_form2').checked==false))
	{
	  alert("Please let us know if you would like an option to save the form and return later to complete it");
	  document.getElementById('save_the_form1').focus();
	  return false;
	}
	if((document.getElementById('face_an_issue1').checked==false)&&(document.getElementById('face_an_issue2').checked==false))
	{
	  alert("Please let us know if you faced an issue in filling any of the fields");
	  document.getElementById('face_an_issue1').focus();
	  return false;
	}
	if(document.getElementById('face_an_issue1').checked==true){
		if((document.getElementById('DOB').checked==false)&&(document.getElementById('Qualification').checked==false)&&(document.getElementById('Designation').checked==false)&&(document.getElementById('PAN').checked==false)&&(document.getElementById('DoorNo').checked==false)&&(document.getElementById('AreaLocality').checked==false)&&(document.getElementById('StreetName').checked==false)&&(document.getElementById('Landmark').checked==false)&&(document.getElementById('ODoorNo').checked==false)&&(document.getElementById('OAreaLocality').checked==false)&&(document.getElementById('OStreetName').checked==false)&&(document.getElementById('OLandmark').checked==false)&&(trimSpace(document.getElementById('fieldIssue').value)==""))
		{
		  alert("Please specify which field/s you had an issue/s with");
		  document.getElementById('DOB').focus();
		  return false;
		}	
		/*else if(!special_validation(document.getElementById('fieldIssue').value,''))
		{
		  alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		  document.getElementById('fieldIssue').focus();
		  document.getElementById('fieldIssue').select();
		  return false;
		}*/
	}
	
	if((document.getElementById('enough_information_pro1').checked==false)&&(document.getElementById('enough_information_pro2').checked==false))
	{
	  alert("Please let us know if you had enough information to make an informed choice about the product");
	  document.getElementById('enough_information_pro1').focus();
	  return false;
	}
	if(document.getElementById('enough_information_pro2').checked==true){
		if((document.getElementById('CardFeatures').checked==false)&&(document.getElementById('FeesCharges').checked==false)&&(document.getElementById('CardIssuanceProcess').checked==false)&&(document.getElementById('SpecialOffers').checked==false)&&(trimSpace(document.getElementById('suggestion').value)==""))
		{
		  alert("Please specify what you would like information on");
		  document.getElementById('CardFeatures').focus();
		  return false;
		}	
		/*else if(!special_validation(document.getElementById('suggestion').value,''))
		{
		  alert("Please do not use any special characters (such as % & #).\nPlease use alphabets, numbers and only these punctuations (.,/)");
		  document.getElementById('suggestion').focus();
		  document.getElementById('suggestion').select();
		  return false;
		}*/
	}
	refshowslideshow();
	return true;
}
function common_validate()
{
	var test1=sugg_validate();
	if(test1==true){		
		document.getElementById('feedback_form').style.display='none';
		//window.location.href="#";		
		//document.getElementById('frmsuviocrthank').action = "#";
		//document.frmsuviocrthank.submit();
		
		document.frmsuviocrthank.externalOfferCode.value=getParameter("externalOfferCode");		
		document.frmsuviocrthank.Email_Id.value=getParameter("Email_Id");
		document.frmsuviocrthank.Mobile.value=getParameter("Mobile");
		document.frmsuviocrthank.name.value=getParameter("name");
		document.getElementById('redirectURL').value = '../cards/images/ioc-lite-r-thankyou.htm';
		document.frmsuviocrthank.action ='../../SaveLead/SaveExcel.aspx?val=1';
		document.frmsuviocrthank.submit();
	}
	return false;
}

function oncustomerfaceissue(val)
{
	if(val=='yes')
	{	
		document.getElementById('faseIssue').style.display='block';	
	}
	else
	{
		document.getElementById('faseIssue').style.display='none';
	}	
}

function oncustomerenoughinf(val)
{
	if(val=='no')
	{	
		document.getElementById('moreInformation').style.display='block';	
	}
	else
	{
		document.getElementById('moreInformation').style.display='none';
	}	
}
	

function refhideslideshow()
{
	document.getElementById('b-scrn').style.display = "none";
	document.getElementById('ref').style.display = "none";	
}
function refshowslideshow()
{
	document.getElementById('b-scrn').style.display = "block";
	document.getElementById('ref').style.display = "block";	
	window.scrollTo(20,0);
	if(screen.height == 768)
	{
	document.getElementById('ref').style.left = (screen.width / 2)-235+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-380+"px";
	}
	else if(screen.height == 864)
	{
	document.getElementById('ref').style.left = (screen.width / 2)-235+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-430+"px";
	}
	else if(screen.height == 900)
	{
	document.getElementById('ref').style.left = (screen.width / 2)-235+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-450+"px";
	}
	else if(screen.height == 1200)
	{
	document.getElementById('ref').style.left = (screen.width / 2)-235+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-600+"px";
	}
	else if(screen.height == 600)
	{
	document.getElementById('ref').style.left = (screen.width / 2)-235+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-300+"px";
	}
	else if(screen.height == 1200)
	{
	document.getElementById('ref').style.left = (screen.width / 2)-235+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-600+"px";
	}
	else
	{
	document.getElementById('ref').style.left = (screen.width / 2)-260+"px";
	document.getElementById('ref').style.top = (screen.height / 2)-380+"px";
	}	
	setTimeout(refhideslideshow,5000);
}
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

 