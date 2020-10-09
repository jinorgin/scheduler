import React from "react";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";




import "components/Appointment/styles.scss";

export default function Appointment(props){

      const appointments = props.appiontments.map(appointment => {
        return(
          <Appointment 
          key = {appointment.id}
          id = {appointment.id}
          time = {appointment.time}
          interview = {appointment.interview}
          />

        )


      })

    return (
        <article className="appointment">
         { /*This here does not work for some reason.*/ }
          {appointments}   
            <Show />
        </article> 

    )
}