
import React from "react";

import { withRouter } from 'react-router-dom';

import { getSingleLeague } from "../requests";

class LeagueDetails extends React.Component {

    state = {
        league: null
    }

    componentDidMount(){
        const id = this.props.match.params["id"];
        getSingleLeague(id)
        .then(res => {
            console.log(res);
            this.setState({league: res.data})
        });
    }

    render() {

        console.log("FORM PATH PARAMS", this.props.match.params);

        return (
            <div>
                LEAGUE DETAILS
                {
                    this.state.league && this.state.league.conferences
                    ?
                    <ul>
                        {
                            this.state.league.conferences.map(conf => {
                                return <ConferenceDisplay key={conf.id} conf={conf} />
                            })
                        }
                    </ul>
                    : null
                }
            </div>
        )
    }
}

const ConferenceDisplay = ({conf}) => {
    return (
        <li>
            <h3>{conf.name}</h3>
            <ul>
                {
                    conf.divisions.map(div => {
                        return <DivisionDisplay key={div.id} div={div} />
                    })
                }
            </ul>
        </li>
    );
}

const DivisionDisplay = ({div}) => {
    return (
        <li>
            <h4>{div.name} Division</h4>
            <ul>
                {
                    div.teams.map(team => {
                        return <TeamDisplay key={team.id} team={team} />
                    })
                }
            </ul>
        </li>
    );
}

const TeamDisplay = ({team}) => {
    return (
        <li>
            <h5>{team.city} {team.name}</h5>
        </li>
    )
}

export default withRouter(LeagueDetails);
