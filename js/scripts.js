
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
    jQuery(this).unbind('submit'); // unbind this submit handler first and ...
    num = ($("input#number").val());
    results = count(num);
    results.forEach(function(result){
      $("#main").append('<li>' + "your output is "+ result + "!"+'</li>');
      $(".rec").show();
    });
      event.preventDefault();
  });

});
