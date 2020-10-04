import React from "react";

import InterviewerListItem from "components/InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList(props){

    const interviewerList = props.interviewers.map(viewer => {


        return(
            <InterviewerListItem 
            key = {viewer.id}
            name = {viewer.name}
            avatar = {viewer.avatar}
            selected = {viewer.id === props.interviewer}
            setInterviewer = {viewer.setInterviewer}
            />
        )
    })



    return (
<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewerList}</ul>
</section>

    )
}