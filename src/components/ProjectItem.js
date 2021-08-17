import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.jpg';

const ProjectsStyle = styled.div`
  .projects__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projects__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projects__title {
    font-size: 2.2rem;
  }
  .projects__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis',
  link = '#',
}) {
  return (
    <ProjectsStyle>
      <a href={link} className="projects__img">
        <img src={img} alt="ProjectImg" />
      </a>
      <div className="projects__info">
        <Link to="#">
          <h3 className="projects__title">{title}</h3>
        </Link>
        <p className="projects__desc">{desc}</p>
      </div>
    </ProjectsStyle>
  );
}
