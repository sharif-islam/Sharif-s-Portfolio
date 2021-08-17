import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem';
import SectionTitle from '../components/SectionTitle';
import projectInfo from '../assets/data/projects';

const ProjectsStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(projectInfo);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value <= 0) {
      setProjectData(projectInfo);
    }
  }

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      projectInfo.filter((item) =>
        item.name.toLocaleLowerCase().match(searchText.toLocaleLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectsStyle>
      <div className="container">
        <SectionTitle subheading="some of my resent works" heading="Projects" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              img={item.img}
              title={item.name}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
}
