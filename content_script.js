
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
            var genericHrefs = ['<a href = "', '"> RMP </a>'];
            var profHrefs = target.getElementsByClassName("data-item")[0].getElementsByClassName("data-item-long active")[0].getElementsByClassName("float-left")[0].getElementsByClassName("clearfix")[0].getElementsByClassName("data-column")[4];
            console.log("Original profHrefs: " + profHrefs);
            console.log("Inner html of prof hrefs: " + profHrefs.innerHTML);

            var rmpInnerHtml = "";
            var profTags = profHrefs.getElementsByTagName("a");
            for(i = 0; i < profTags.length; i++){
                var profName = profHrefs.getElementsByTagName("a")[i].innerHTML;
                var profNameInFormat = getInFormat(profName);
                
                var profTid = profJson[profNameInFormat];
                var specificRmpUrl = genericRmpURL + profJson[profNameInFormat];
                
                //console.log("RMP Url: " + specificRmpUrl);
                var specificHref = genericHrefs[0] + specificRmpUrl + genericHrefs[1];
                //console.log("Specific href: " + specificHref);
                rmpInnerHtml += specificHref;
            }
            profHrefs.innerHTML += rmpInnerHtml;
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