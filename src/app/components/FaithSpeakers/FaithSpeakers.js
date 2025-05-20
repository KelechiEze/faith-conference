'use client';

import React, { useState } from 'react';
import './FaithSpeakers.css';

const speakers = [
  {
    name: "Rev. Victor Adeyemi",
    image: "/6.jpg",
    bio: "Rev. Victor Adeyemi is the founder and senior pastor of Global Harvest Church, a ministry with multiple branches worldwide. He is known for his profound teaching of the Word of God with simplicity and power."
  },
  {
    name: "Pastor Dare Kolawole",
    image: "/2.jpg",
    bio: "Pastor Dare Kolawole is a dynamic minister of the gospel with a passion for revival and transformation. His messages stir hunger for deeper intimacy with God."
  },
  {
    name: "Rev. Craig W. Hagin",
    image: "/1.jpg",
    bio: "Rev. Craig W. Hagin is known globally for his impactful teaching and role in Rhema Bible Church. He carries a strong anointing for leadership and healing ministry."
  },
  {
    name: "Rev. Tokunbo Adejuwon",
    image: "/4.jpg",
    bio: "Rev. Tokunbo Adejuwon is a seasoned minister and director of Rhema Nigeria. He teaches with clarity and authority, inspiring faith in believers."
  },
  {
    name: "Pastor Isaac Oyedepo",
    image: "/3.jpg",
    bio: "Pastor Isaac Oyedepo is a passionate preacher of revival and purpose. He empowers youth and families through sound doctrine and fervent teaching."
  },
  {
    name: "Pastor Bayo Osinuga (PB)",
    image: "/5.jpg",
    bio: "Pastor Bayo Osinuga, fondly known as PB, is a vibrant communicator of the Word, equipping believers to walk in dominion and excellence."
  }
];

const FaithSpeakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const closeModal = () => setSelectedSpeaker(null);

  return (
    <div  id="speakers" className="speakers-section">
      <h2 className="speakers-title">Esteemed Speakers</h2>
      <p className="speakers-subtitle">
        Join us to hear from these anointed ministers of God who will bring powerful messages<br />
        of faith and transformation.
      </p>

      <div className="speakers-list">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker" onClick={() => setSelectedSpeaker(speaker)}>
            <img src={speaker.image} alt={speaker.name} className="speaker-avatar" />
            <p className="speaker-name">{speaker.name}</p>
            <p className="speaker-bio">Click for bio</p>
          </div>
        ))}
      </div>

      <h3 className="connect-heading">
        Unlock Spiritual Growth and Connect with a Vibrant Community at the Faith Conference
      </h3>

      <div className="benefits">
        <span><span className="dot" /> Be Inspired</span>
        <span><span className="dot" /> Be Equipped</span>
        <span><span className="dot" /> Be Connected</span>
        <span><span className="dot" /> Be Renewed</span>
      </div>

      <button className="register-button">Register Now</button>

      {selectedSpeaker && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">{selectedSpeaker.name}</h2>
            <div className="modal-body">
              <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-image" />
              <p className="modal-bio">{selectedSpeaker.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaithSpeakers;
