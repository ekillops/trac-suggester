
//Front End
var chooseLang = function(curly, mobile, design, apps) {
  if (curly === true) {
    if (mobile === true) {
      $("#java").show();
    }
    else if (design === true) {
      $("#css").show();
    } else {
      $("#c-sharp").show();
    }
  } else if (apps === true) {
    $("#ruby").show();
  } else {
    $("#php").show();
  }
};

$(document).ready(function() {


$("#submit-survey").click(function() {
  $(".survey-result").hide();

  /*chooseLang does not receive input if variables are defined outside of click event*/
  var apps = $('#apps').is(':checked');
  var mobile = $('#mobile').is(':checked');
  var large = $('#large').is(':checked');
  var design = $('#design').is(':checked');
  var curly = $('#curly').is(':checked');


  chooseLang(curly, mobile, design, apps);
});

//event.preventDefault();
});
