function EventExamples() {
    return (
        <div>
            {/* {Click} */}
            <button onClick={() => console.log('Clicked')}>Click</button>

            {/* {Double Click} */}
            <button onDoubleClick={() => console.log('Double clicked')}>Double Click</button>

            {/* {Mouse Enter/Leave} */}
            <div onMouseEnter={() => console.log('Mouse entered')}>Hover over me</div>

            {/* {Input Change} */}
            <input onChange={(e) => console.log(e.target.value)} />

            {/* Form Submit */}
            <form onSubmit={(e) => e.preventDefault()}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EventExamples;