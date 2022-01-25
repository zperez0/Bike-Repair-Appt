$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    $(".name1").text(name1Input);
  });
});

$(document).ready(function() {
  $("form#description").submit(function(event) {
    event.preventDefault();
    const description1Input = $("input#description1").val();
    $(".description1").text(description1Input);
  });
});

$(document).ready(function() {
  $("form#date").submit(function(event) {
    event.preventDefault();
    const date1Input = $("input#date1").val();
    $(".date1").text(date1Input);
  });
});

$(document).ready(function() {
  $("form#times").submit(function(event) {
    event.preventDefault();
    const times1Input = $("input#times1").val();
    $(".times1").text(times1Input);
  });
});