// Have functions for each specific "module" or "feature"

function getInFormat(profName){
    return profName.replace(". ", "_");
}

function linkRMP(profJson){
    var target = document.getElementById("inlineCourseResultsDiv");
    var genericRmpURL = "https://www.ratemyprofessors.com/ShowRatings.jsp?tid="
    
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var genericHrefs = [' (<a href = "', '">RMP</a>)'];
            
            var allClasses = target.getElementsByClassName("data-item");

            for(classIndex = 0; classIndex < allClasses.length; classIndex++){
                var profHrefs = allClasses[classIndex].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
                var profTags = profHrefs.getElementsByTagName("a");
                for(i = 0; i < profTags.length; i++){
                    var profName = profHrefs.getElementsByTagName("a")[i].innerHTML;
                    var profNameInFormat = getInFormat(profName);
                    var profTid = profJson[profNameInFormat];
                    
                    var specificRmpUrl = genericRmpURL + profJson[profNameInFormat];
                    var specificHref = genericHrefs[0] + specificRmpUrl + genericHrefs[1];
                    profHrefs.getElementsByTagName("a")[i++].innerHTML += specificHref;
                }
            }
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