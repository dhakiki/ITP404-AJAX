(function() {

$('#twitter-users a').on('click', function () {
	//console.log(this.id);
	
var twitterid = this.id;
$.ajax({
	url: 'twitter-JSON.php',
	data: {
		id: twitterid
	},
	success: function(response) {
		$('#tweets').html(response);
	},
	error: function(err1, err2, err3) {
		console.log(err1, err2, err3);
	}
});



});

// the following wont work!! li elements don't exist yet when you load this page!!
// $('#tweets li').on('click', function() { 
// 		console.log("clicked!");
// });

//how to deal with adding event listeners when you are dealing with ajax (newly brought items): target only existing tags (like the div container!!)

$('#tweets').on('click', 'li', function() {
	$(this).addClass("read");
});


})();