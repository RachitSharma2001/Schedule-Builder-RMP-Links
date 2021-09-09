
var script = document.createElement("script");
script.src = chrome.runtime.getURL("script.js");
(document.head || document.documentElement).appendChild(script);

/*
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js'); // In web_accessible_resources
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
    s.remove(); // Clean up, just to be nice.
};*/