var PAGE_TITLE_PREFIX = "Hayden Schiff " + String.fromCharCode(8226) + " ";

// link the navbar tabs to the tab panes
$('#navbarTablist a').click(function (e) {
  e.preventDefault();
  
  // update the url hash
  location.hash = e.target.hash;
  //$(window).scrollTop();
  window.scrollTo(0, 0);         // execute it straight away
  setTimeout(function() {
    window.scrollTo(0, 0);     // run it a bit later also for browser compatibility
  }, 1);
  
  // switch tabs
  $(this).tab('show');
  
  // update the page title
  document.title = PAGE_TITLE_PREFIX + $(this).html();
  
  // hide the navbar dropdown on XS screens
  $("#navbarCollapse").removeClass("in");
});

// clicking the navbar title takes you to the Resume page
$('#navbarTitle').click(function () {
  $('#navbarTablistResume').click();
});

$(document).ready(function() {
  
  // if there's a hash in the URL, go to the correct tab pane
  var hash = "resume";
  if (window.location.hash != "") {
    hash = window.location.hash.substring(1);
  }
  $("#"+hash).addClass("active");
  $('a[href=#'+hash+']').click();
  
  $(".tab-pane").addClass("fade");
  $("#"+hash).addClass("in");
  
});

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