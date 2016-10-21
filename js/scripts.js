
//Front End

//Very specific function. Not to be reused in general contexts.
var chooseLang = function(apps, mobile, large, design) {
  if (apps === true) {
    if (mobile === true) {
      $("#java").show();
    } else if (large === true) {
      $("#c-sharp").show();
    } else {
      $("#ruby").show();
    }
  } else if (design === true) {
    $("#css").show();
  }  else {
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

    chooseLang(apps, mobile, large, design);
  });

});
