chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get-prof-data') {
    sendResponse("hello");
  }
});

// background.js
/*
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

<td onclick="javascript:createModalReviewWin('detailWin','Course Summary','course.cfm?crn=23009&amp;termCode=202110&amp;winName=detialWin', 550, 450);" 
title="View Course Detail" nowrap="nowrap"></td>

course_search_results.cfm?crn=23009&amp;termCode=202110&amp;


*/