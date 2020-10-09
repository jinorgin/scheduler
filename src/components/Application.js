import React, {useEffect, useState} from "react";
import axios from "axios";

import "components/Application.scss";
import getAppointmentsForDay from "helpers/selectors";

import Appointment from "components/Appointment/index";


import DayList from "components/DayList";

export default function Application(props) {

  //const setDay = day => setState({...state, day});
  //const setDays = days => setState({...state, days});


  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];

  const appointments = [
    {
      id: 1,
      time: "12pm",
    },
    {
      id: 2,
      time: "1pm",
      interview: {
        student: "Lydia Miller-Jones",
        interviewer: {
          id: 1,
          name: "Sylvia Palmer",
          avatar: "https://i.imgur.com/LpaY82x.png",
        }
      }
    }
  ];

  const [day, setDay] = useState("Monday")
  //const [days, setDays] = useState([])
  const [interviewer, setInterviewer] = useState([appointments])
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
 /*
    useEffect(() => {
      axios.get("/api/days").then( 
        response => setDays(response.data)
          //Print console log to see if days fetched.
          //console.log(result.data.days)
          //I will uncomment this later.
          //setDays(result.data.days)

        
    )
    }, [])*/
/*
    Promise.all([
      Promise.resolve("first"),
      Promise.resolve("second"),
      Promise.resolve("third"),
    ]).then((all) => {
      console.log(all[0]); // first
      console.log(all[1]); // second
      console.log(all[2]); // third
    
      const [first, second, third] = all;
    
      console.log(first, second, third);
    });*/

    //const appointment = 



  return (
        <main className="layout">
          <section className="sidebar">
          <img
      className="sidebar--centered"
      src="images/logo.png"
      alt="Interview Scheduler"
    />
    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu">
      <DayList 
      days={days}
      day={day}
      setDay={setDay}
      />
    </nav>
    <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
    />
          </section>

          { /*
          I removed <Appointment /> on the section. So the application does not crash.
          */ }
          <section className="schedule">
          </section>
        </main>
      );
}
