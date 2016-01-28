javascript:(function () {
  'use strict';
  var confirmed;
  var $textarea = jQuery('[name="issue[body]"],[name="pull_request[body]"]');
  jQuery.get('https://github.com/attn/pull-request-template/blob/master/pull-request-template.md', function (data) {
    if (confirmed) {
      $textarea.val(jQuery(data).find('.repository-content .file .blob article >').text());
    }
  });
  confirmed = jQuery.trim($textarea.val()) ? confirm('This pull request already has body text. Do you want to replace it?') : true;
})();
