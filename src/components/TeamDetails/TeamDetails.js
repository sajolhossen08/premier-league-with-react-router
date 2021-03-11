import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faFlag, faBiohazard, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'
import ImageMale from '../../images/male.png'
import ImageFemale from '../../images/female.png'




const TeamDetails = () => {
    const {idTeam}= useParams();
    
    const [teamDetail, setTeamDetail]=useState({});

   
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setTeamDetail(data.teams[0]))
    }, [idTeam]);
    const {strTeamBadge, strTeam, strCountry, intFormedYear, strGender, strSport, strDescriptionEN, strFacebook, strTwitter, strYoutube} = teamDetail;

    const genderImage = strGender;
    
    return (
        <>
        <div className="container text-center">
        <img className= "team-logo" src={strTeamBadge} alt="..."/>
        </div>
        <div className= "container d-md-flex  text-light description-box">
            <div className="description-point">
                <h3>{strTeam}</h3>
                <p><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</p>
                <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                <p><FontAwesomeIcon icon={faBiohazard} /> Sport Type: {strSport}</p>
                <p><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</p>
            </div>
            <div className= "img-div">
                {genderImage === "Male" && <img  className="gender-img" src={ImageMale} alt="..."/>}
                {genderImage === "Female" && <img  className="gender-img" src={ImageFemale} alt="..."/>}
            </div>

        </div>
        <Container className= "text-justify text-light">
            <p>{strDescriptionEN} </p>
        </Container>
        <div className="container text-center">
            <a className="external-link" href={`https://${strFacebook}`} > <FontAwesomeIcon icon={faFacebook} /></a>
            <a className="external-link" href={`https://${strTwitter}`} > <FontAwesomeIcon icon={faTwitter} /></a>
            <a className="external-link" href={`https://${strYoutube}`} > <FontAwesomeIcon icon={faYoutube} /></a>
        </div>
    </>
    );
};

export default TeamDetails;