
import React from "react";

import { withRouter } from "react-router-dom";

import { createNewLeague } from "../requests";

/*
params[:name]
params[:salary_cap]
params[:average_cap_percentage_increase]
params[:cap_increase_chance]
params[:playoff_teams]
params[:has_conferences]
params[:divisions_per_conference]
params[:teams_per_division]
*/

class NewLeagueForm extends React.Component {

    submit = (event) => {
        event.preventDefault();
        const form = event.target;

        console.log("SUBMIT");

        // return;

        const league = {
            name: form.name.value,
            salary_cap: form.salary_cap.value,
            average_cap_percentage_increase: form.average_cap_percentage_increase.value,
            cap_increase_chance: form.cap_increase_chance.value,
            playoff_teams: form.playoff_teams.value,
            has_conferences: form.has_conferences.checked,
            divisions_per_conference: form.divisions_per_conference.value,
            teams_per_division: form.teams_per_division.value
        }

        createNewLeague(league)
        .then(res => {
            console.log("form res", res);
            // this.props.history.push(`/leagues/${res.data.id}`);
        });
    }

    render() {
        return (
            <div>
                NEW LEAGUE FORM
                <form onSubmit={this.submit} 
                    style={
                        {
                            width: "50%",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gridGap: "8px",
                            padding: "8px"
                        }
                    }
                >
                    <InputBlock param="name" />
                    <InputBlock param="salary_cap" />
                    <InputBlock param="average_cap_percentage_increase" />
                    <InputBlock param="cap_increase_chance" />
                    <InputBlock param="has_conferences" type="checkbox" />
                    <InputBlock param="divisions_per_conference" />
                    <InputBlock param="teams_per_division" />
                    <InputBlock param="playoff_teams" />
                    <button type="submit">Create League</button>
                </form>
            </div>
        );
    }
}

const InputBlock = ({param, type}) => {
    console.log(param, type);

    const inputType = type || "text";

    console.log(inputType);

    return (
        <>
        <label htmlFor={param}>{param}</label>
        <input type={inputType} name={param} id={"input_" + param} />
        </>
    )
}

export default withRouter(NewLeagueForm);