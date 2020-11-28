$("#connectButton").click(
	function(){
	  alert($("#login").val());
    $("#connectForm").setAttribute("method", "post");
    $("#connectForm")..setAttribute("action", "login.php");
    $("#connectForm")..submit();
  }  
);