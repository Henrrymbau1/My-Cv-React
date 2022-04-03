import React from 'react'
import "./intro.css"

function Intro() {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className="intro-hello">Hello, My name is </h2>
                <h1 className="intro-name">Henrry Bautista</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">Full Stack</div>
                        <div className="intro-title-item">About Me</div>
                        <div className="intro-title-item">Education</div>
                        <div className="intro-title-item">Experience</div>
                        <div className="intro-title-item">More</div>
                    </div>
                </div>
                <p className="intro-desc">
                I'm learning the technologies that are well suited to the creation of web pages.
                </p>
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-bg"></div>
            <img src="https://clipart.info/images/ccovers/1495646366cristiano-ronaldo-vs-barcelona-real-madrid-png-clipart.png" alt="" className="intro-img" />
        </div>
    </div>
  )
}

export default Intro