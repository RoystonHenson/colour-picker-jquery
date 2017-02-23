function setPreviewColor(color) {
  $('#preview').css('background-color', color);
  $('#color-code').text($('#preview').css('background-color'));
}

function addBox(color) {
  $('#colors').prepend('<div class=\'item\' style=\'background-color: ' + color + ';\'></div>');
}

$(document).on('keyup', '#color', function() {
  setPreviewColor($('#color').val());
});

$(document).on('click', '#add-to-favorite', function() {
  addBox($('#color').val());
  $('#color').val('');
});
