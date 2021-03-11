import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link } from "react-router-dom";

const Team = (props) => {
    const {idTeam, strSport, strTeam, strTeamBadge} = props.team;
    return (
        <div className="col-md-6 col-lg-4 my-3">
                <div className="league-card">
                    <Card>
                        <Card.Img className= "team-logo-img" variant="top" src={strTeamBadge} />
                        <div className="text-center">
                        <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sport Type: {strSport} </Card.Text>
                        <Button as={ Link } to = {`/team/${idTeam}`} variant="warning" className="text-light">Explore <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                        </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
    );
};

export default Team;