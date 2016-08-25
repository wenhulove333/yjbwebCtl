$(function(){
	$("#sendid").bind("click",function(){
		userLogin();
	});
})

function userLogin(){
	 var objSS = document.getElementById("password");
	 var password = objSS.PwdTextB64;
	 
	 $("#encodepw").text(password)
}