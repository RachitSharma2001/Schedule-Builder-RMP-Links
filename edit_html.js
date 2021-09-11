//console.log("We work!");

/*
chrome.runtime.sendMessage('get-prof-data', (response) => {
    // 3. Got an asynchronous response with the data from the background
    console.log('received response: ', response);
});*/

/*document.addEventListener('message', function(event){
    if (event.data && event.data.extensionMessage) {
        console.log(event.data.extensionMessage);
    }
}, {passive: true})*/

chrome.action.addListener(async (tab) => {
    let unknown_data = await fetch('content_script.js');
    console.log("we found it! " + unknown_data)
    //let user = await userReq.json();
    
  });

/*window.addEventListener('message', function(event) {
    if (event.data && event.data.extensionMessage) {
        console.log(event.data.extensionMessage);
    }
});*/

var target = document.getElementById("inlineCourseResultsDiv");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        professor_name = target.getElementsByClassName("data-item")[0].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
        console.log("Inner html: " + professor_name.innerHTML)
        /*parent_divs = target.getElementsByClassName("data-item");
        console.log("target class name [0]: " + target.getElementsByClassName("data-item")[0]);
        console.log(target);
        for (const child_div in parent_divs){
            // The first "getbyclassname" returns div with open seats, units, professor
            // Get the third item from this, the professor
            console.log("Child div: " + child_div);
            professors_div = child_div.getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[2];
            console.log("Professors div: " + professors_div);
            console.log("clearfix div: " + child_div.getElementsByClassName("clearfix")[0]);
        }*/
        //float_left = target.getElementsByClassName("float-left");
        //console.log("Float left: " + float_left);
        /*var arr = [], l = document.links;
        for(var i=0; i<l.length; i++) {
            arr.push(l[i].href);
            console.log("Href: " + l[i].href)
        }*/
    });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true }

// pass in the target node, as well as the observer options
observer.observe(target, config);

/*
var button = document.getElementsByClassName("btn btn-mini btn-primary uppercase")[0];

button.addEventListener("click", function() {
    console.log("Clicked!");
    element = document.getElementById("inlineCourseResultsDiv");
    console.log(element);
  });*/

//myc("Rachit");
//createModalReviewWin('detailWin','Course Summary','course.cfm?crn=23009&amp;termCode=202110&amp;winName=detialWin&amp;ws=n', 550, 450);
//document.search_form = null;
//textSearch();
//ColdFusion.Ajax.submitForm('search_form', 'course_search_results.cfm?crn=23009&amp;termCode=202110&amp;', callback, errorHandler); 
/*
    New Idea: have an RMP link to the professor show up on all courses. that smallest executable step 
    Then: Maybe try to also link bio, as well as syllabus or helpful information about class. 
    Another idea: find easy G.E. You select G.E parameters you want, and it returns the results but with classes sorted by professors RMP ratings. (highest to lowest)
    or RMP Easiness ratings. Maybe do this for anything they select -> after Coldfusion returns the results, parse and edit the page to show the classes that are easiest
    from that selection first (or have highest professor ratings). Like if I type ECS 50, and enter search, then Coldfusion loads form, so we add a click listener to 
    search button (or put a button "Sort by easiest professor" or "Sort by highest rated professor") and it edits the list to show classes in taht order
        So what it does: HAve a button "Sort by easiest professor" and add it to form. Then when user clicks search, and then the button "Sort by easiest professor", then the 
        code looks at the html and parses professor names, and finds their ratings on rmp, sorts the html div objects, and edit the html to of the search results to show
        in sorted order!
        People would love this.
        Look at the Miguel guys code, how he got RMP ratings, and then see how he searched RMP and do same thing and parse the important details. Hardest part is editing the 
        search results boxes to be in sorted order. Test this first!
        In end: add button with click listener, which when clicked goes through the html of the search results (look at page source to see what the "boxes" in the search results 
        when I search are. like what is the id, how can I get professor name, how can change it/reorder it)
*/