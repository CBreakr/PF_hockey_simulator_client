
import React from "react";

import NewLeagueForm from "../Components/NewLeagueForm";

import { getAllLeagues } from "../requests";

export default class LeagueListContainer extends React.Component {

    state = {
        leagues: []
    }

    componentDidMount() {
        getAllLeagues()
        .then(res => {
            console.log(res);
            this.setState({leagues: res.data})
        });
    }

    render() {
        return (
            <div>
                <NewLeagueForm />
                <h3>ALL THE LEAGUES</h3>
                <ul>
                {
                    this.state.leagues.map(league => {
                        return (
                            <li key={league.id}>
                                <a href={`/leagues/${league.id}`}>{league.name} - {league.year}</a>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        )
    }
}
