function setPreviewColor(color) {
  $('#preview').css('background-color', color);
  $('#color-code').text($('#preview').css('background-color'));
}

function addBox(color) {
  $('#colors').prepend('<div class=\'item\' style=\'background-color: ' + color + ';\'></div>');
}

$(document).ready(function() {
  var colors = ['rgb(255, 0, 0)', 'rgb(199, 21, 133)', 'rgb(249, 192, 255)',
                'rgb(255, 255, 0)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)',
                'rgb(255, 165, 0)', 'rgb(255, 204, 0)', 'rgb(13, 152, 186)',
                'rgb(255, 69 ,0)', 'rgb(128,128,128)', 'rgb(138,43,226)',
                'rgb(205,133,63)', 'rgb(255,105,180)', 'rgb(75,0,130)',
                'rgb(127,255,212)'];
  colors.forEach(function(color) {
    addBox(color);
  });
});

$(document).on('keyup', '#color', function() {
  setPreviewColor($('#color').val());
});

$(document).on('click', '#add-to-favorite', function() {
  addBox($('#color').val());
  $('#color').val('');
});
