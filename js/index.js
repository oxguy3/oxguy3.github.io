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

  // // hide the stuff we're gonna fade in
  // var tabDiv = $(location.hash);
  // tabDiv.finish("fadeboxes");
  // var fadeboxes = tabDiv.find(".fadebox");
  // fadeboxes.css("display", "none");
  // $(".fadebox-post").css("display", "none");
  
  // switch tabs
  $(this).tab('show');
  
  // update the page title
  document.title = PAGE_TITLE_PREFIX + $(this).html();
  
  // hide the navbar dropdown on XS screens
  $("#navbarCollapse").removeClass("in");


  // fadeboxes.each(function() {
  //   addToFadeboxesQueue($(this), tabDiv);
  // });
  // addToFadeboxesQueue($(".fadebox-post"), tabDiv);

  // tabDiv.dequeue("fadeboxes");

});

// function addToFadeboxesQueue(box, tabDiv) {
//   tabDiv.queue("fadeboxes", function() {
//     box.fadeIn({
//       slideDown: 1500
//     });
//     tabDiv.dequeue("fadeboxes");
//   })
//   tabDiv.delay(200, "fadeboxes");
// }

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



  // apply pretty colors!
  //prettifyHomePage();
  
});

$('#navbarTablistHome').click(function() {
  prettifyHomePage();
});

function prettifyHomePage() {
  // colors taken from http://flatuicolors.com/
  /*var prettyColors = ["#1ABC9C", "#16A085", "#2ECC71", "#27AE60", "#3498DB", 
    "#2980B9", "#9B59B6", "#8E44AD", "#34495E", "#2C3E50", "#F1C40F", 
    "#F39C12", "#E67E22", "#D35400", "#E74C3C", "#C0392B"];*/
  var prettyColors = [
    "#c0392b", // resume
    "#16a085", // projects
    "#2c3e50", // github
    "#2980b9", // linkedin
    "#f39c12" // email
  ];

  $('.homebox-icon').each(function() {

    $(this).css("color", "transparent");

    var index = 0; //Math.floor(Math.random()*prettyColors.length);
    var currColor = (prettyColors.length > 0) ? prettyColors[index] : "#000000";

    $(this).animate({
      color: currColor
    }, 1500);
    prettyColors.splice(index, 1);
  });
  //setTimeout(prettifyHomePage, 5000);
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