export function getAppointmentsForDay(state, dayName) {
    /*
{
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
*/
const result = [];


 const dayObj = state.days.find(day => { 
    return day.name === dayName;
});

if (!dayObj){
    return result;
}

for (const id of dayObj.appointments){
    result.push(state.appointments[id]);
}

 return result;

}

export function getInterview(state, interview){
    const res = []

    const viewerObj = state.interviewers.find(viewer => {
        return viewer.name === interview
    })


    


}