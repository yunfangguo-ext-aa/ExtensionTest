// var btn = document.getElementsByClassName("btn btn-primary BtnGroup-item js-details-target")[1];
// btn.click();

// var merge = document.getElementsByClassName("btn btn-primary BtnGroup-item js-merge-commit-button")[0];
// merge.click();

//
// click -> show comment zone -> choose Approve -> click submit -> wait entil page loading done -> at conversation page, click squash and merge. 
//

var comment_array = [
	"good code",
	"well done",
	"something really amazing",
	"no comments"
];

// Review changes button click
document.getElementsByClassName("btn btn-sm btn-primary js-menu-target")[0].click(); 
// leave a comment by random
document.getElementsByName("pull_request_review[body]")[0].value = comment_array[Math.floor((Math.random() * 4) )];
// choose Approve radio button 
document.getElementsByName("pull_request_review[event]")[1].click();
// click submit button
var f = document.getElementsByClassName('pull-request-review-menu dropdown-menu dropdown-menu-sw p-0');
f.getElementsByTagName('button').click();

// wait until page loading done.
var url = window.location.href 
var reg = '/^\d+$/';
if (reg.test(url) != true ){
	// at conversation page, squash and merge
	document.getElementsByClassName("btn btn-primary BtnGroup-item js-details-target")[1].click;
	document.getElementsByClassName("btn btn-primary BtnGroup-item js-merge-commit-button").click;	
}
