JUB (Javascript Userful Bits)
=============================

JUB goal is to provide a framework to add all the usual javascript effects for Web applications, without the need to write any Javascript.


Toggable divs
-------------

Make a div appear/disappear clicking on an element (f.i. a link)

* add class __toggable__ to the div you want to hide/show
* the attribute __bind__ contains the id of the link or element triggering the display/hide of the toggable div

Loadable divs
-------------

Populate the content of a div with the result of an Ajax call

* add class __loadable__ to the div you want to populate with the result of the ajax call
* the attribute __bind__ contains the URL of the resource to call

Injecting link
--------------

A link who sets the content of a div with the result of an Ajax call

* add class __injecting__ to link
* the __href__ attribute points to the URL to GET
* the __bind__ attribute contains the id of the div to populate

Hidden div
-----------

Create a hidden div

* add class __init-hidden__ to a div

Validated form
--------------

Create a validated form

* add class __validated__ to any form
* declare form element requirement using JQuery.validate

Deleting element
----------------

Create a element that, when clicked, causes the deletion of the content of a div

* add class __deleting__ to any form
* the __bind__ attribute contains the id of the div to delete

HTTP DELETE Link
----------------

Create a link that send a HTTP DELETE (instead of HTTP GET)

* add class __httpdelete__ to a link
* the __href__ attribute contains the URL to HTTP DELETE
* (optionally) the __redirectOnSuccess__ attribute contains the URL to redirect the browser after the HTTP DELETE
