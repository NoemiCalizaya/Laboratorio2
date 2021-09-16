import React from "react";

export const CardComponent = ({item, handlerClick}) => {
    return(
    <div
        className={item.styles}
        key={item.id} 
        onClick={() => {
            handlerClick(item);
        }}
    >
        {item.state === true ? (
            <div className="word">{item.frontend}</div>
        ) : (
            <div className="word">{item.backend}</div>
        )}
    </div>
    );       
};
