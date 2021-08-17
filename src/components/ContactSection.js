import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container" />
      <SectionTitle subheading="Get in touch" heading="Contact" />
      <div className="contactSection__wrapper">
        <div className="left">
          <ContactInfoItem icon={<MdLocalPhone />} text="+8801851777315" />
          <ContactInfoItem icon={<MdEmail />} text="abmsharif555@gmail.com" />
          <ContactInfoItem icon={<MdPlace />} text="Cumilla, Bangladesh" />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </ContactSectionStyle>
  );
}
