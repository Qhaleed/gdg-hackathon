import React from "react"
import "../styles/Hero.css"

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-gradient" />
            <div className="hero-grid" />
            <div className="hero-content">
                <h1 className="hero-title">Connect with local developers</h1>
                <p className="hero-description">
                    When you join a Google Developer Group, you'll have the opportunity to learn new skills in a variety of
                    formats. You'll also meet local developers virtually or in-person with similar interests in technology. The
                    community prides itself on being an inclusive environment where everyone and anyone interested in tech - from
                    beginner developers to experienced professionals are welcome to join.
                </p>
                <button className="hero-button">Sign up</button>
            </div>
        </div>
    )
}


export default Hero;