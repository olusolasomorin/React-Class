function InputExample() {
    function handleChange(event) {
        console.log('Input value:', event.target.value);
    }

    return <input onChange={handleChange} />;
}

export default InputExample;