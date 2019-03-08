import {createStore} from 'redux';
import {wrapStore} from 'webext-redux';

console.log('background script is running');

const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + (action.payload || 1);
    default:
      return state;
  }
};

const store = createStore(rootReducer, {});

wrapStore(store);

browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
});

browser.tabs.onUpdated.addListener(async (tabId) => {
  browser.pageAction.show(tabId)
});
