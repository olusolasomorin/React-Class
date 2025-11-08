function CitySelector({ selectedCity, onSelectCity }) {
    return (
        <div>
            <button onClick={() => onSelectCity('Lagos')}>Lagos</button>
            <button onClick={() => onSelectCity('Abuja')}>Abuja</button>
            <button onClick={() => onSelectCity('Port Harcourt')}>Port Harcourt</button>
        </div>
    );
}

export default CitySelector;