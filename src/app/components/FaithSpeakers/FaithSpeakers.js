'use client';

import React, { useState } from 'react';
import './FaithSpeakers.css';

const speakers = [
  {
    name: "Rev. Victor Adeyemi",
    image: "/6.jpg",
    bio: `Rev. Victor Adeyemi is an exceptional Spiritual Father, whose voice has birthed spiritual gifts in the lives of many. Rev. as he is widely called is the Senior Pastor of Global Harvest Churches worldwide with Branches in Nigeria, United Kingdom, United States and Canada. He continues to give expression to his evangelistic calling through Crusades, discipleship, and mentoring.

Rev. Victor is a prolific writer and has authored books such as, Bible Keys to Financial Overflow, Making Marriage Work (co-authored with his wife, Pastor Jumoke Adeyemi), Seeds of Destiny, Servant Leadership and much more.

Rev. Victor remains committed to seeing individuals discover, develop, and deploy their potentials so that they can fulfil their divine assignment.`
  },
  {
    name: "Pastor Dare Kolawole",
    image: "/2.jpg",
    bio: `Pastor Dare Kolawole, affectionately known as PD, is the Lead Pastor at Global Harvest Church, Island.

He embodies a compelling fusion of unwavering faith and a fervent passion for the well-being of both God’s people and the teachings of the Lord.

With a remarkable background as an Electrical Engineer and successful Businessman, PD has chosen to prioritise imparting the wisdom and teachings of God as his life’s ultimate pursuit. Through his diverse experiences and deep-rooted faith, he embodies a spirit committed to healing and enriching lives with the transformative power of the Gospel.

In a beautiful partnership with his beloved wife, Pastor Ope Kolawole, they tirelessly dedicate themselves to the ministry, manifesting an inspiring example of love, devotion, and service to God.`
  },
  {
    name: "Rev. Craig W. Hagin",
    image: "/1.jpg",
    bio: `Rev. Craig W. Hagin reaches today’s generation with a fresh, practical approach to sharing biblical principles. Craig teaches extensively on faith and ministers with a strong healing anointing.

He serves as an associate pastor of Rhema Bible Church and is also an instructor at Rhema Bible Training College Center. Rev. Craig has been in ministry all his life. At the age of 3, he helped stock the book table at meetings held by his grandfather, Kenneth E. Hagin. In 1990 he was named crusade director for Kenneth Hagin Ministries and now serves as Chief Operating Officer. He received a bachelor’s degree from Oklahoma State University in 1991 and graduated from Bible Training College in 1993.

Rev. Craig received a Doctor of Ministry degree from the School of Bible Theology Seminary & University in San Jacinto, California in 2021. He is ordained through Rhema Ministerial Association International.

Rev. Craig and his wife, Mrs Mia, and their children live in Tulsa, Oklahoma.`
  },
  {
    name: "Rev. Tokunbo Adejuwon",
    image: "/4.jpg",
    bio: `Rev. Tokunbo Adejuwon is a man of the Word and of the Holy Ghost. He currently serves as the National Director of Rhema Bible Training Centre Nigeria which is one of the international campuses of Rhema Bible Training College USA (Kenneth Hagin Ministries).

Rhema Nigeria has campuses in Abuja, Port Harcourt, Kaduna (English & Hausa Campuses), Nasarawa, Ikeja Lagos, Lagos Island, Enugu, University of Ibadan, Obafemi Awolowo University Ile-Ife, and University of Ilorin.

Brother Toks also itinerates both nationally and internationally teaching faith, ministering healing to the sick and flowing with the Holy Spirit.

He is happily married to Dr. Akunna and they have three lovely children.`
  },
  {
    name: "Pastor Isaac Oyedepo",
    image: "/3.jpg",
    bio: `Pastor Isaac Oyedepo is an apostle, revivalist, and also a well-renowned pastor who has been dedicated to God’s work all around the world. He is the lead Pastor at Isaac Oyedepo Evangelistic Ministry.

Through his sermons, teachings, and healing ministry, he has left a positive impact on countless individuals worldwide. His messages are renowned for their simplicity and depth making it easier for numerous individuals to grasp the teachings of the Bible. Additionally, he is a published author with works such as “The Winning Attitude” and “Breaking Generational Curses” to his credit.

He undertakes major university campus invasions across Nigeria, Africa, and the World to reach the unsaved with the gospel of the Kingdom and Ignite the saved through the Ministry of the Holy Ghost. He believes that University campuses serve as the “Bridge” between the “Next” and “Now” Generation.

Pastor Isaac is in a blessed marital union with Mrs. Ayomitide and their union is blessed with four children.`
  },
  {
    name: "Pastor Bayo Osinuga (PB)",
    image: "/5.jpg",
    bio: `Pastor Bayo Osinuga (fondly known as PB) serves as the Lead Pastor of the UK branch of Global Harvest Church, under the spiritual oversight of Rev. Victor Adeyemi.

PB is a passionate teacher and preacher of God’s Word, with a strong emphasis on faith, spiritual leadership, and the transformative power of the Holy Spirit. His ministry is often accompanied by testimonies of healing, transformation, and divine encounters. He inspires believers to live purposefully and to lead with conviction in every sphere of life.

Beyond the pulpit, PB is a dedicated marriage counsellor and an accomplished global corporate project manager, with a track record of delivering major initiatives across five continents and over 25 countries.

He is joyfully married to Mrs Bukky, and together they are blessed with two wonderful children.`
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

      <a href="#register" className="register-button">Register Now</a>


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
