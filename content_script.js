// Have functions for each specific "module" or "feature"

function getInFormat(profName){
    return profName.replace(". ", "_");
}

function linkRMP(profJson){
    //console.log("Professor json for A_Kaloti: ", profJson["A_Kaloti"]);
    var target = document.getElementById("inlineCourseResultsDiv");
    var genericRmpURL = "https://www.ratemyprofessors.com/ShowRatings.jsp?tid="
    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var genericHrefs = [' (<a href = "', '">RMP</a>)'];
            
            var allClasses = target.getElementsByClassName("data-item");

            for(classIndex = 0; classIndex < allClasses.length; classIndex++){
                var profHrefs = allClasses[classIndex].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
                //console.log("Original profHrefs: " + profHrefs);
                //console.log("Inner html of prof hrefs: " + profHrefs.innerHTML);
                //console.log("profHrefs[0]: " + profHrefs[0].innerHTML);
                //var rmpInnerHtml = "";
                var rmpInnerHtml = [];
                var profTags = profHrefs.getElementsByTagName("a");
                const profTagsLength = profTags.length;
                for(i = 0; i < profTagsLength; i++){
                    var profName = profHrefs.getElementsByTagName("a")[i].innerHTML;
                    var profNameInFormat = getInFormat(profName);
                    
                    var profTid = profJson[profNameInFormat];
                    var specificRmpUrl = genericRmpURL + profJson[profNameInFormat];
                    
                    var specificHref = genericHrefs[0] + specificRmpUrl + genericHrefs[1];
                    //rmpInnerHtml += specificHref;
                    //profHrefs.getElementsByTagName("a")[i].innerHTML += specificHref;
                    rmpInnerHtml[i] = specificHref;
                }
                //profHrefs.innerHTML += rmpInnerHtml;
                var innerHtmlIndex = 0;
                for(i = 0; i < profTags.length; i++){
                    profHrefs.getElementsByTagName("a")[i].innerHTML += rmpInnerHtml[innerHtmlIndex];
                    console.log("profTags.length: " + profTags.length)
                    i++;
                    innerHtmlIndex++;
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