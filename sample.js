function count(num) {
   newNums = [];
  for (i=1; i<=num; i++) {

 	if ((i % 3===0 )&& (i % 15 !== 0) && (i % 5 !== 0))
    newNums.push("ping");
  else if ((i % 5===0 )&& (i % 15 !== 0) && (i % 3 !== 0))
    newNums.push("pong");

  else if ((i % 15 === 0) )
    	newNums.push("ping pong");
  else
      newNums.push(i);
	}
   //var newArr = newNums.map(function(newNum){
     //return newNum;
   //});
};

//user interface
$(document).ready(function() {
  $("form#input").submit(function(event) {
      event.preventDefault();

    var num = parseInt($("#number").val());
    var results = count(num);
    alert();
    //$.each(newNums, function(value){
      //$("#results").text(value);
      //$("#results").text("." + ":" + );

    //$("#results").text(results);
  });
});
