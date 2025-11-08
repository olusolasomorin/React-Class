import { useState } from "react";
import CityDisplay from "./Citydisplay";
import CitySelector from "./CitySelector";

function Parents() {
    const [selectedCity, setSelectedCity] = useState('Lagos');

    <div>
        <CitySelector 
            selectedCity={selectedCity}
            onSelectCity={setSelectedCity}
        />
        <CityDisplay city={selectedCity} />
        <h2>you</h2>
    </div>
}

export default Parents;