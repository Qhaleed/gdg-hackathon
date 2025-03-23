import '../styles/Sponsors.css';

const Sponsors = () => {
    const investors = [
        { name: "Converge", imageSrc: `${process.env.PUBLIC_URL}/converge.jpg` },
        { name: "Converge", imageSrc: `${process.env.PUBLIC_URL}/vintazk.png` },
        { name: "Rayyan-Pelaez ", imageSrc: `${process.env.PUBLIC_URL}/Rayyan-Pelaez.png` },
    ];
    // Rayyan-Pelaez 

    return (
        <div className="investor-section">
            <h2 className="investor-heading">Platinum Sponsors</h2>
            <div className="sponsors-divider"></div>
            <p className="sponsors-description">This event is proudly supported by esteemed organizations and individuals that share our vision and commitment to making a meaningful impact. Their generous contributions help us bring this event to life.</p>
            <br />
            <br />

            <div className="investor-grid">
                {investors.map((investor, index) => (
                    <div key={index} className="investor-card">
                        <img
                            src={investor.imageSrc}
                            alt={`${investor.name} Logo`}
                            className="investor-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;
