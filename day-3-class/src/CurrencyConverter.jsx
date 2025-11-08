import { useState } from 'react';
import './CurrencyConverter.css';

function CurrencyConverter() {
    const [naira, setNaira] = useState(0);
    const [dollars, setDollars] = useState(0);
    const exchangeRate = 1650;  //1 USD = 1650 NGN

    function handleNairaChange(e) {
        const amount = parseFloat(e.target.value)  || 0;
        setNaira(amount);
        setDollars((amount / exchangeRate).toFixed(2));
    }

    function handleDollarChange(e) {
        const amount = parseFloat(e.target.value) || 0;
        setDollars(amount);
        setNaira((amount * exchangeRate).toFixed(2));
    }

    function reset() {
        setNaira(0);
        setDollars(0);
    }

    return (
        <div className='converter'>
            <h2>💱 Naira to Dollar Converter</h2>

            <div className='input-group'>
                <label>Nigerian Naira (₦)</label>
                <input
                 type="number"
                 value={naira}
                 onChange={handleNairaChange}
                 placeholder='Enter amount in Naira'
                 />
            </div>

            <div className='exchange-rate'>
                <p>Exchange Rate: ₦{exchangeRate} = $1</p>
            </div>

            <div className='input-group'>
                <label>US Dollars ($)</label>
                <input
                 type="number"
                 value={dollars}
                 onChange={handleDollarChange}
                 placeholder='Enter amount in Dollars' 
                 />
            </div>

            <button onClick={reset} className='reset-btn'>Reset</button>
        </div>
    );
}

export default CurrencyConverter;