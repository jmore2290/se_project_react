import React from "react";
import './ToggleSwitch.css';
import {useState, useContext} from "react";
import { CurrentTemperatureUnitContext } from "../../utils/contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
    /* console.log("Toggle Switch");
     const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C")

     const handleChange = (e) => {
        console.log("here")
        if (currentTemperatureUnit === "C") {
            handleToggleSwitchChange("F")
            console.log(currentTemperatureUnit);
        }
        else if (currentTemperatureUnit === "F") {
            handleToggleSwitchChange("C")
            console.log(currentTemperatureUnit);
        }
     }
        */

     //console.log(currentTemperatureUnit)
     const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);
     console.log(currentTemperatureUnit);
       return (
         <div>
            <label className="switch">
                <input type="checkbox" className="switch__box" onChange={handleToggleSwitchChange}/>
                    <span className={currentTemperatureUnit === "F" ? 'switch__slider switch__slider-F' : 'switch__slider switch__slider-C'}></span>
                    <p className={`switch__temp-F ${currentTemperatureUnit === "F" && 'switch__active'}`}>F</p>
                    <p className={`switch__temp-C ${currentTemperatureUnit === "C" && 'switch__active'}`}>C</p>
            </label>
         </div>

       )

}

export default ToggleSwitch;