 function count(num) {
   newNum = "";
  for (i=1; i<=num; i++) {


 	if ((i % 3===0 )&& (i % 15 !== 0) && (i % 5 !== 0))
    newNum += "ping"
  else if ((i % 5===0 )&& (i % 15 !== 0) && (i % 3 !== 0))
    newNum += "pong";

  else if ((i % 15 === 0) && (i % 3 !== 0) && (i % 5 !==0))
    	 newNum += "ping pong";
  else
      newNum+=i;
	}
};

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#number").val());
    var result = count(num);
    $("#result").text(newNum);
  });
});
