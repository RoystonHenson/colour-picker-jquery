function setPreviewColor(color) {
  $('#preview').css('background-color', color);
  $('#color-code').text($('#preview').css('background-color'));
}

$(document).on('keyup', '#color', function() {
  setPreviewColor($('#color').val());
});
