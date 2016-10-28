
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
  return newNums;
};
//user interface
$(document).ready(function() {
  $("form#input").submit(function(event) {
    num = ($("input#number").val());
    results = count(num);
    results.forEach(function(result){
      $("ul.results").append('<li>' + "your output is "+ result + "!"+'</li>');
      $("#show").show();
    });

    //$("#results").text(result);

    //$.each(newNums, function(value){
      //$("#results").text(value);
      //$("#results").text("." + ":" + );
      event.preventDefault();
    //$("#results").text(results);
  });

});
