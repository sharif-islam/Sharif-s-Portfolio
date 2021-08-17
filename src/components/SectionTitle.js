import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
    text-align: center;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

export default function SectionTitle({
  subheading = 'This is Subheading',
  heading = 'This is Heading',
}) {
  return (
    <SectionTitleStyle>
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
