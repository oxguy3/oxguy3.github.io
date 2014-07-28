var PAGE_TITLE_PREFIX = "Hayden Schiff " + String.fromCharCode(8226) + " ";

// link the navbar tabs to the tab panes
$('#navbarTablist a').click(function (e) {
  //e.preventDefault();
  $(this).tab('show');
  document.title = PAGE_TITLE_PREFIX + $(this).html();
  $("#navbarCollapse").removeClass("in");
});

// clicking the navbar title takes you to the Resume page
$('#navbarTitle').click(function () {
  $('#navbarTablistResume').click();
});

$('#projectsLightbox').on('show.bs.modal', function (e) {
  var imageUrl =  $(e.relatedTarget).attr("href");
  $("#projectsLightboxAnchor").attr("href", imageUrl);
  $("#projectsLightboxImg").attr("src", imageUrl);
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