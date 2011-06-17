/**
classes
.clickable:  bind-> javascript function name
.toggable: bind-> div id of the clickable element
.loadable: bind-> url
a.injecting: bind-> div id, href-> url
.init-hidden 
form.validated 
.deleting: bind->div id
a.httpdelete [redirectOnSuccess -> url]
**/


//Classes and utility methods
var Clickable = function(element) {
	var it = element;
	
	it.click(function() {
		var funcName = it.attr('bind');
		eval(funcName+"()");
	})
};

var Toggable = function(toggableElementId, triggerElementId) {
    var who = toggableElementId;
    var trigger = triggerElementId;

    trigger.click(function() {
        who.toggle();
    });
}

var HttpDelete = function(link) {
    var who = link;
	var sourceUrl = link.attr('href');
	var redirect = link.attr('redirectOnSuccess');

    who.click(function() {
        $.ajax({
		  url: sourceUrl,
		  type: 'DELETE',
		  success: function(data){
		    if (redirect != undefined && redirect != null)
			{
				window.location = redirect;
			}
		  }
		});
		return false;
    });
}

var populateDivWithContent = function(sourceUrl, div){
		$.ajax({
		  url: sourceUrl,
		  context: document.body,
		  success: function(data){
		    div.html(data);
			attachAll("#"+div.attr('id'));		
		  }
		});	
}

var Loadable = function(url, div) {
    var who = div;
    var source = url;

    populateDivWithContent(url, who);
}

var Injecting = function(div, link) {
    var who = link;
    var source = link.attr('href');
	var target = div;
	
	who.click(function() {
    	populateDivWithContent(source, target);		
		return false;
	});
}

var Deleting = function(div, link) {
    var who = link;
	var target = div;
	
	who.click(function() {
    	target.html('');
	});
}

var buildParent = function(parent) {
	if (parent == null)
		return "";
	else
		return parent + " ";
}

//initialisation methods
var attachToggables = function(parent) {
	parent = buildParent(parent);
	$(parent+".toggable").each(function(index) {
		new Toggable($('#'+$(this).attr('bind')), $(this));
	});
}

var attachLoadables = function(parent) {
	parent = buildParent(parent);
	$(parent+".loadable").each(function(index) {
		new Loadable($(this).attr('bind'), $(this));
	});
}

var attachInjectings = function(parent) {
	parent = buildParent(parent);
	$(parent+"a.injecting").each(function(index) {
		new Injecting($('#'+$(this).attr('bind')), $(this));
	});
}

var attachDeletings = function(parent) {
	parent = buildParent(parent);
	$(parent+"a.deleting").each(function(index) {
		new Deleting($('#'+$(this).attr('bind')), $(this));
	});
}

var attachInitHiddens = function(parent) {
	parent = buildParent(parent);
	$(parent+".init-hidden").each(function(index) {
		$(this).hide();
	});
}

var attachFormValidation = function(parent) {	
	parent = buildParent(parent);
	$(parent+"form.validated").validate();	
}
var attachClickables = function(parent) {
	parent = buildParent(parent);
	$(parent+".clickable").each(function(index) {
		new Clickable($(this));
	});
}
var attachHttpDelete = function(parent) {
	parent = buildParent(parent);
	$(parent+"a.httpdelete").each(function(index) {
		new HttpDelete($(this));
	});
}

var attachAll = function(parent) {
	attachToggables(parent);   
	attachInitHiddens(parent); 
	attachFormValidation(parent); 
	attachClickables(parent);
	attachLoadables(parent);	
	attachInjectings(parent);
	attachDeletings(parent);
	attachHttpDelete(parent);   
}

$(document).ready(function() {
	attachAll();
});
