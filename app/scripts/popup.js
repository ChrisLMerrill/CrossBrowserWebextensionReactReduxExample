import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';
import ItemList from './items';

console.log('popup script running');

console.log('about to connect to the store...');
const store = new Store();

console.log('declaring the render');
const unsubscribe = store.subscribe(() => {
    unsubscribe();
    render(<Provider store={store}><ItemList/></Provider>, document.getElementById("root"));
});
console.log('render started');