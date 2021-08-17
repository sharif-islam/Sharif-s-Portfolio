import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyle = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;

export default function Services() {
  return (
    <ServicesItemStyle>
      <div className="container">
        <SectionTitle subheading="what i will do for you" heading="Services" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do UI/UX design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also Develop the websites.I create high performance website with smoother and faster."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Programmer"
            desc="I write Code for the websites and also write code from my fashion. Try to give a interactive look of websites."
          />
        </div>
      </div>
    </ServicesItemStyle>
  );
}
