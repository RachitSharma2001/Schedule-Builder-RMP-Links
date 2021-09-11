/*
    TODO:
    1. We have the data that shows, for professors first initial and last name, the tid of the professor. Its stored in test_file.txt
    2. The content script (but not the injected script edit_html.js) can read from the test_file.txt and get the result as a json
    3. We need to somehow communicate that json to the injected script edit_html.js
        i. This script can't load data in our extension since it is technically run as if it was in the js that loads the schedule builder 
        website 
        ii. So it needs to get the json from some other script communicating to it
    4. Search:
        1. Manifest V3 how to get a message in an injected script from a content script 
        2. How to get data from external file in injected script 
        3. Worst comes to worse, we'll just copy paste the json that has all the tids. We can create maybe a string array of 2 or 3 entries, and copy paste the 
        json in and just seperate at different places (so that each string fits, as currently the large string is too long for the js to handle as one string)
*/

const url = chrome.runtime.getURL('test_file.txt');

// url to link to: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2503455

/*
fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => console.log("Here is json: " + json["G_Quon"]));*/

    /*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });*/
window.postMessage({extensionMessage: "From content script"}, '*');

var script = document.createElement("script");
script.src = chrome.runtime.getURL("edit_html.js");
(document.head || document.documentElement).appendChild(script);

/*
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js'); // In web_accessible_resources
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
    s.remove(); // Clean up, just to be nice.
};*/