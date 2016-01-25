Pull Request Template
=====================

Our modified pull request template based off of http://quickleft.com/blog/pull-request-templates-make-code-review-easier

## Usage

### Bookmarklet

Select the text below and drag into your bookmarks bar.  When you have a pull request open, click the button and the template will be copied into place.

````
javascript:(function() {var e = document.getElementById('pull_request_body');if (e) {if (e.value == '') {e.value += "#### What's this PR do?\n#### Where should the reviewer start?\n#### How should this be manually tested?\n#### Any background context you want to provide?\n#### What are the relevant tickets?\n#### Screenshots (if appropriate)\n#### Questions:\n#### Checklist:\n- [ ] Code standard review\n- [ ] Tests included\n- [ ] Documentation provided\n- [ ] End user documentation provided\n\n#### Release Type:\n- [ ] Major\n- [ ] Minor\n- [X] Patch";}}})();
````

### Old Fashioned

* Copy the template markdown below and paste it into your pull request description

