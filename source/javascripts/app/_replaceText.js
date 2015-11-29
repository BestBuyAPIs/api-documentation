// Loops through all the rendered code blocks and swaps them for the user's actual key.
// Keeps track of the currently used key to permit swapping back-and-forth
$(document).ready(function () {
  'use strict';
  var oldKey           = 'YourAPIKey';
  var targetedElements = 'pre.highlight code span.s1, pre.highlight code span.s2, code.prettyprint';

  $('input.key-replace').on('keyup', function(e){
    if (e.keyCode == 13) {
      $(this).blur();
    }
  });
  $('input.key-replace').on('blur', function(){
    var newKey = $(this).val();
    // We have a special exception so that if people empty the field, it reverts to the first value
    if (newKey.length > 0) {
      if (newKey.length < 12 || !/^\w+$/.test(newKey)) {
        alert('Best Buy API keys are at least 12 characters long, and only contain letters & numbers');
        $('input.key-replace').focus();
        return false;
      }
    } else {
      newKey = 'YourAPIKey';
    }
    var oldKeyMatch = new RegExp(oldKey, 'g');
    $(targetedElements).each(function () {
       $(this).text($(this).text().replace(oldKeyMatch, newKey));
    });
    oldKey = newKey;
  });
});