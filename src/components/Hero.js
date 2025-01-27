import React from "react"
import "../styles/Hero.css"

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-gradient" />
            <div className="hero-grid" />
            <div className="hero-content">
                <h1 className="hero-title">THE BLUECODE</h1>
                <p className="hero-subtitle">Zamboanga Hackathon 2025</p>
                <p className="hero-description">
                    The BlueCode: Zamboanga Hackathon 2025 marks the first-ever city-wide
                    hackathon since the pre-pandemic era, making it a groundbreaking event
                    for the local tech community. Organized by the Google Developer Groups
                    On Campus Ateneo de Zamboanga University Chapter, it is designed to bring
                    together students from diverse academic institutions with, this two day
                    competition aims to inspire innovation, creativity, and collaboration.
                </p>
                <button className="hero-button">Sign up</button>
            </div>
        </div>
    )
}


export default Hero;