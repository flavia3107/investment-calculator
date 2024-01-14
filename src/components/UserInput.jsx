
export default function UserInput({onChange, userInput}) {
    return <section id='user-input'>
        <div className='input-group'>
            <p>
                <label>Initial Investment</label>
                <span className="inputContainer">
                    $ <input type="number" required value={userInput['initialInvestment']} onChange={ (event) => onChange('initialInvestment', event.target.value )}/>
                </span>
            </p>
             <p>
                <label>Annual Investment</label>
                <span className="inputContainer">
                $ <input type="number" required value={userInput['annualInvestment']} onChange={ (event) => onChange('annualInvestment', event.target.value )}/>
                </span>           
            </p>
            <p>
                <label>Expected Return</label>
                <span className="inputContainer">
                % <input type="number" required value={userInput['expectedReturn']} onChange={ (event) => onChange('expectedReturn', event.target.value )}/>
                </span>
            </p>
             <p>
                <label>Duration (Years)</label>
                <input type="number" required value={userInput['duration']} onChange={ (event) => onChange('duration', event.target.value )}/>
            </p>
        </div>
    </section>
}