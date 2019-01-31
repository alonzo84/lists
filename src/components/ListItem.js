import React from 'react';

function ListItem({ id, iconLink = null, description, delHandler }) {
    return (
        <>
            <img src={iconLink}></img>
            <span>{description}</span>
            <button onClick={() => { delHandler(id) }}>Delete</button>
        </>
    )
}

export default ListItem;