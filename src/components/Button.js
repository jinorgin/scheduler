import React from "react";


import classNames from "classnames";


import "components/Button.scss";

export default function Button(props) {

let btnClass = classNames("button", {
   "button--confirm" : props.confirm,
   "button--danger" : props.danger,
   "button--alert" : props.alert,
   "button--warning":props.warning
});

return <button className={btnClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
}
