import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import aboutImg from '../assets/images/about-page-img.jpg';
import AboutItemInfo from '../components/AboutItemInfo';
import ContactBanner from '../components/ContactBanner';

const AboutStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .common {
    margin-left: 10rem;
  }
  .about__subheading {
    font-size: 2rem;
    padding: 0.5rem;
    border-radius: 8px;
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .right {
    img {
      opacity: 0.7;
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__item {
    margin-top: 15rem;
  }
  .about__info__heading {
    font-size: 3rem;
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
    }
  }
`;

export default function About() {
  return (
    <AboutStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading common">Hi, I am Sharif Islam</p>
            <h2 className="about__heading common">A Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from Cumilla, Bangladesh. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others. I started coding since I
                was in high school. Coding is also an art for me. I love it and
                now I have the opportunity to design along with the coding. I
                find it really interesting and I enjoyed the process a lot. My
                vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <div className="common">
              <Button btnText="Download CV" btnLink="#" />
            </div>
          </div>
          <div className="right">
            <img src={aboutImg} alt="sharif img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutItemInfo
              title="School"
              items={['Moheshpur Azizia High School,Barura,Cumilla']}
            />
            <AboutItemInfo
              title="College"
              items={['Comilla Govt. College,Cumilla']}
            />
            <AboutItemInfo
              title="University"
              items={['Comilla University,Cumilla']}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">MY SKILL</h1>
            <AboutItemInfo
              title="FrontEnd"
              items={[
                'HTML',
                'CSS',
                'JS',
                'Bootstarp',
                'React',
                'Material UI',
                'Redux',
              ]}
            />
            <AboutItemInfo
              title="BackEnd"
              items={['Node JS', 'Express JS', 'Mongodb']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutStyle>
  );
}
