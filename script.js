myc("Rachit");
//createModalReviewWin('detailWin','Course Summary','course.cfm?crn=23009&amp;termCode=202110&amp;winName=detialWin&amp;ws=n', 550, 450);
document.search_form = null;
//textSearch();
ColdFusion.Ajax.submitForm('search_form', 'course_search_results.cfm?crn=23009&amp;termCode=202110&amp;', callback, errorHandler); 
/*
    New Idea: have an RMP link to the professor show up on all courses. that smallest executable step 
    Then: Maybe try to also link bio, as well as syllabus or helpful information about class. 
    Another idea: find easy G.E. You select G.E parameters you want, and it returns the results but with classes sorted by professors RMP ratings. (highest to lowest)
    or RMP Easiness ratings. Maybe do this for anything they select -> after Coldfusion returns the results, parse and edit the page to show the classes that are easiest
    from that selection first (or have highest professor ratings). Like if I type ECS 50, and enter search, then Coldfusion loads form, so we add a click listener to 
    search button (or put a button "Sort by easiest professor" or "Sort by highest rated professor") and it edits the list to show classes in taht order
        So what it does: HAve a button "Sort by easiest professor" and add it to form. Then when user clicks search, and then "Sort by easiest professor", then the 
        code looks at the html and parses professor names, and finds their ratings on rmp, sorts the html div objects, and edit the html to of the search results to show
        in sorted order!
        People would love this.
        Look at the Miguel guys code, how he got RMP ratings, and then see how he searched RMP and do same thing and parse the important details. Hardest part is editing the 
        search results boxes to be in sorted order. Test this first!
*/