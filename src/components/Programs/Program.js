import React from 'react';
import './Program.css';

const Programs = (props) => {
    return (
        <div className="col">
            <img className="cardImage" src={ props.row[1].links.mission_patch } ></img>
            <div className="CardInfo">
                <p className="MissionName">{ props.row[1].mission_name + " # " + props.row[1].flight_number } </p>
                <p><label>Mission Id: </label><span>{ props.row[1].mission_id[0] } </span></p>
                <p><label>Launch Year: </label><span>{ props.row[1].launch_year }</span> </p>
                {
                    props.row[1].launch_success ?
                        <p><label>Successful Launch: <span>True</span></label> </p> :
                        <p><label>Successful Launch:  <span>False</span></label> </p>
                }
                <p><label>Successful Landing: </label><span>{ props.row[1].launch_year }</span> </p>
            </div>

        </div>
    )
}


export default Programs;