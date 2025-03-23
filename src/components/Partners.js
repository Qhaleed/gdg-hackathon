import { transform } from 'framer-motion';
import '../styles/Partners.css';
const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors">
            <div className="sponsors-container">
                <h2 className="sponsors-title">Partners</h2>
                <div className="partners-divider"></div>
                <p className="investors-description">Proudly supported by these local educational institutions and tech communities</p>

                <div className="sponsor-logos">
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/ADZU.png`} alt="ADZU" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/CSITE.png`} alt="CSITE" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/AICG1.png`} alt="AICG" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/venom.jpg`} alt="Venom" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/gdg-crimson2.jpg`} alt="GDG Crimson" style={{ transform: "scale(1)" }} />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/dict.png`} alt="DICT" style={{ transform: "scale(1)" }} />
                    </div>

                    {/* Uncommented partners */}
                    {/* <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/WMSU2.jpg`} alt="WMSU" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/PILLAR.png`} alt="PILLAR" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/ZPPSU.jpg`} alt="ZPPSU" />
                    </div>
                    <div className="sponsor-item">
                        <img src={`${process.env.PUBLIC_URL}/UZ.png`} alt="UZ" style={{ borderRadius: "0%" }} />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Sponsors





