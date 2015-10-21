var PAGE_TITLE_PREFIX = "Hayden Schiff " + String.fromCharCode(8226) + " ";

// link the navbar tabs to the tab panes
$('#navbarTablist a').click(function (e) {
  e.preventDefault();
  
  // update the url hash
  location.hash = e.target.hash;
  
  // switch tabs
  $(this).tab('show');
  
  // update the page title
  document.title = PAGE_TITLE_PREFIX + $(this).text();
  
  // hide the navbar dropdown on XS screens
  $("#navbarCollapse").removeClass("in");

});

$('#navbarTablist a[href^=#]').on('shown.bs.tab', function (e) {
  // scroll to top of tab
  window.scrollTo(0, 0); // execute it straight away
  setTimeout(function() {
    window.scrollTo(0, 0); // run it a bit later also for browser compatibility
  }, 1);
})

$('a.homebox-link[href^=#]').click(function (e) {
  var href = $(this).attr("href");
  $("#navbarTablist a[href="+href+"]").click();
});

// clicking the navbar title takes you to the Resume page
$('#navbarTitle').click(function () {
  $('#navbarTablistHome').click();
});

$(document).ready(function() {
  
  // if there's a hash in the URL, go to the correct tab pane
  var hash = "home";
  if (window.location.hash != "") {
    hash = window.location.hash.substring(1);
  }
  $("#"+hash).addClass("active");
  $('#navbarTablist a[href=#'+hash+']').click();
  
  $(".tab-pane").addClass("fade");
  $("#"+hash).addClass("in");
  
});

$('#navbarTablistHome').click(function() {
  prettifyHomePage();
});

function prettifyHomePage() {
  // colors taken from http://flatuicolors.com/
  var prettyColors = [
    "#c0392b", // resume
    "#16a085", // projects
    "#34495e", // github
    "#2980b9", // linkedin
    "#e7832b", // stackoverflow
    "#8e44ad" // email
  ];

  $('.homebox-icon').each(function() {

    $(this).css("color", "transparent");

    var index = 0;
    var currColor = (prettyColors.length > 0) ? prettyColors[index] : "#000000";

    $(this).animate({
      color: currColor
    }, 1500);
    prettyColors.splice(index, 1);
  });
}

// tooltips for skills
$('.skill-score-good').tooltip({
    title: 'Proficiency: Good',
    placement: 'bottom'
});
$('.skill-score-great').tooltip({
    title: 'Proficiency: Great',
    placement: 'bottom'
});
$('.skill-score-excellent').tooltip({
    title: 'Proficiency: Excellent',
    placement: 'bottom'
});
