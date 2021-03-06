import React from "react";

import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props){


    let listItem = classNames("dayClass",
    "day-list__item",{
        "day-list__item--selected":props.selected === true
    }, {"day-list__item--full":props.spots === 0}
    );

    const formatSpots = function(){
        
        if(props.spots === 1){
            return "1 spot remaining"
        }
        if(props.spots === 0){
            return "no spots remaining";
        }

        //console.log(`${props.spots} spots remaining`);
            return `${props.spots} spots remaining`
        
    }

    return (
        <li className={listItem} onClick={() => props.setDay(props.name)}>
            <h2 className="text--regular">{props.name}</h2>
            <h3 className="text--light">{formatSpots()}</h3>
        </li>

    )
}