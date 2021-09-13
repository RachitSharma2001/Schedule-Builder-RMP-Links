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

/*
var prof_tid;

function getProfessorTID(url, name){
    fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => prof_tid = json[name]);
}*/


// url to link to: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2503455

/*
fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => function f(){ 
                
        var target = document.getElementById("inlineCourseResultsDiv");

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                professor_name = target.getElementsByClassName("data-item")[0].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
                console.log("Inner html: " + professor_name.innerHTML);
                var name = "R_Furrow";
                //professor_name.innerHTML = '<a href="mailto:refurrow@ucdavis.edu">Inserted!</a>, <a href="mailto:slkeen@ucdavis.edu">Another insert!</a>';
                console.log(json[name]);
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true }

        // pass in the target node, as well as the observer options
        observer.observe(target, config);
    });
});*/


/* 
    TODO: 
    1. See how to use wait() function
    2. wait until tids is not undefined 
    3. Then go about inserting all the urls -> https://appdividend.com/2020/07/31/javascript-wait-how-to-make-function-wait-in-javascript/
*/

/*
function getProfessorJson(url){
    prof_json = undefined;
    fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => prof_json = json);
    if(prof_json == undefined){
        setTimeout(getProfessorJson, 300, url);
    }else{
        return prof_json;
    }
}
 

prof_json = getProfessorJson(chrome.runtime.getURL('test_file.txt'));
if(prof_json == undefined){
    setTimeout(() => {
        console.log("Professor json for A_Kaloti: ", prof_json["A_Kaloti"]);
    }, 300);
}*/

function linkRMP(profJson){
    //console.log("Professor json for A_Kaloti: ", profJson["A_Kaloti"]);
    var target = document.getElementById("inlineCourseResultsDiv");

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            professor_name = target.getElementsByClassName("data-item")[0].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
            console.log("Inner html: " + professor_name.innerHTML);
            var name = "R_Furrow";
            professor_name.innerHTML = '<a href="mailto:refurrow@ucdavis.edu">Inserted!</a>, <a href="mailto:slkeen@ucdavis.edu">Prof json of Kaloti: ' + profJson["A_Kaloti"] + '</a>';
            console.log(json[name]);
        });
    });
    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);
}

const url = chrome.runtime.getURL('test_file.txt');
    fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => linkRMP(json));

/*
(async () => {
    const url = chrome.runtime.getURL('test_file.txt');
    var profTids = await fetch(url).then((response) => response.json());
    console.log("Professor json for A_Kaloti: ", prof_json["A_Kaloti"]);
});*/
//console.log("Professor json for A_Kaloti: ", prof_json["A_Kaloti"]);
/*
tids = undefined;

const url = chrome.runtime.getURL('test_file.txt');
fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => tid = json);

// replace with a wait function that waits till tids is not undefined

var target = document.getElementById("inlineCourseResultsDiv");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        professor_name = target.getElementsByClassName("data-item")[0].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
        console.log("Inner html: " + professor_name.innerHTML);
        var name = "R_Furrow";
        professor_name.innerHTML = '<a href="mailto:refurrow@ucdavis.edu">Inserted!</a>, <a href="mailto:slkeen@ucdavis.edu">Another insert!</a>';
        console.log(json[name]);
    });
});
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);
*/