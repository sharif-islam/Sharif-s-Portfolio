import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-top: 1rem;
  }
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col1__para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sharif Islam</h1>
          <br />
          <PText>
            A web Design and developer from cumilla, bangladesh. I always make
            websites that have unique designs and also has a good performance
            look.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                type: 'Link',
                title: 'Home',
                path: '/',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+8801851777315',
                path: '/+8801851777315',
              },
              {
                title: 'abmsharif555@gmail.com',
                path: '/abmsharif555@gmail.com',
              },
              {
                title: 'Kandirpar',
                path: 'http://google.com/maps',
              },
              {
                title: 'Cumilla,Bangladesh',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100009165456809',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/sharif_islam30/',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/shariful-islam-302366179/',
              },
              {
                title: 'Github',
                path: 'https://github.com/sharif-islam',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>@ 2021 - Sharif Islam | Designed By Me</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
