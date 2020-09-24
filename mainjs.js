$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

$(document).on('click', '[id="formbtn"]', function(event) {
  event.window.open("index.html")
});