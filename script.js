function setPreviewColor(color) {
  $('#preview').css('background-color', color);
}

$(document).on('keyup', '#color', function() {
  setPreviewColor($('#color').val());
});
