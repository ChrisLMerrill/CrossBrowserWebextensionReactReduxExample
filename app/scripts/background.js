import {createStore} from 'redux';
import {wrapStore} from 'webext-redux';

console.log('background script is starting');

browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
});

browser.tabs.onUpdated.addListener(async (tabId) => {
  browser.pageAction.show(tabId)
});

browser.browserAction.onClicked.addListener(function (tab) {
    const createData =
        {
        type: "popup",
        url: "pages/popup.html",
        width: 600,
        height: 400
        };
    browser.windows.create(createData);
});

const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + (action.payload || 1);
    default:
      return state;
  }
};

const store = createStore(rootReducer, {items: ["thing1","thing2"]});

console.log('about to wrap the store...');
wrapStore(store);

console.log('background script is ready');
