function Capabilities() {
    const capabilities = [
        {
            capability1: "Large Capacity",
            capability2: "for Troubleshooting",
            description: "My development experience has taught me how to locate and fix the root causes of HTML, CSS and JavaScript issues on existing or in-development web applications. This debugging skill also helps while trying decipher how file compiling works and styling verification while comparing web renderings to expected designs during the development process.",
            style: "capabilities__box--troubleshooting"
        },
        {
            capability: "Design Skills",
            description1: "My graphic design skills allow me to create and update screens and pages of web applications as well as multiple components, backgrounds,  icons, rasterized images, and vectors. I understand the necessary file types needed in a web application: png, jpg or svgs.",
            description2: "My knowledge allows my to me choose the necessary paths (depening on the project basis) to create and render icons/images with only CSS or an Icon Library such as Font Awesome or Bootstrap.",
            style: "capabilities__box--designskills"
        },
        {
            capability: "Team Work",
            description: "I have collaborated with multiple teams throughout my career: back-end developers, ux/ui designers and project managers. This experience helps me understand, negotiate and succeed on the team effort required to complete any project or task.",
            style: "capabilities__box--teamwork"
        }
    ];
    return (
        <div className="capabilities">
            {capabilities.map((capability, index) => (
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