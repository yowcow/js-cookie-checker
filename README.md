[![Build Status](https://travis-ci.org/yowcow/js-cookie-checker.svg?branch=master)](https://travis-ci.org/yowcow/js-cookie-checker)
[![CircleCI](https://circleci.com/gh/yowcow/js-cookie-checker.svg?style=svg)](https://circleci.com/gh/yowcow/js-cookie-checker)

Cookie Checker
==============

Super thin web app to check if browser has third-party cookie enabled.

HOW TO USE
----------

Boot this app somewhere, first.

### 1. Store third-party cookie in browser

In your web page, generate a token in running session, embed a code something like:

```html
<img src="https://HOST_NAME_WHERE_THIS_APP_IS_UP/store?token=foo-bar-1234" width="1" height="1">
```

and navigate browser to the next page.

### 2. Check if browser allows third-party cookie

In the next page, embed JavaScript code like:

```html
<input type="hidden" id="your-generated-token" value="foo-bar-1234">

<script>
function callback(token) {
    if (token === document.getElementById('your-generated-token').value) {
        window.location.href = '/success';
    }
    else {
        window.alert('Third-party cookie was not set');
    }
}
</script>

<script src="https://HOST_NAME_WHERE_THIS_APP_IS_UP/store"></script>
```
