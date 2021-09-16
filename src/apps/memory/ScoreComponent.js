import React from "react";

export const ScoreComponent = ({score, scoreMemoria}) => {
    return (
        <div className={score}>
            {<div className="word">{score}</div>}
        </div>
    )
}

