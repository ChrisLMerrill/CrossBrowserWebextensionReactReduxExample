/**
 * Christopher L Merrill, Copyright 2019
 */
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { items: state.items};
};

const ItemListAbs = ({items}) => (
    <ul>
        {items.map(item => (
            <li key={item}>
                {item}
            </li>
        ))}
    </ul>
);
const ItemList = connect(mapStateToProps)(ItemListAbs);

export default ItemList;