import { data } from '../data';

function Capabilities() {
    return (
        <div className="capabilities">
            {data.capabilities.map((capability, index) => (
                <div key={index} className={`capabilities__box ${capability.style}`}>
                    <div className="container">
                        <h4>
                            {capability.capability ? capability.capability : <><span className="block">{capability.capability1}</span><span className="block">{capability.capability2}</span></>}
                        </h4>
                        <p>{capability.description}</p>
                        {capability.discription ? <p>{capability.description}</p> : <><p>{capability.description1}</p><p className="block">{capability.description2}</p></>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Capabilities;