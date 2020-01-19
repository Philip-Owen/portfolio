import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RepoContainer from "./RepoContainer";

const gqlReq = `
query {
	user(login: "philip-owen") {
	  repositories(privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}, first: 5) {
		edges {
		  node {
			id
			name
			url
			languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
			  edges {
				node {
				  name
				}
			  }
			}
		  }
		}
	  }
	}
  }
`;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchRepos = async () => {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `token ${process.env.TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: gqlReq })
    });
    const data = await res.json();
    setRepos(data.data.user.repositories.edges);
    setLoaded(!loaded);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Container id="projects">
      <SectionTitle>
        <h2>Projects</h2>
      </SectionTitle>
      <SectionSubtitle>What {"I've"} been working on:</SectionSubtitle>
      <RepoContainer repos={repos} loaded={loaded} />
      <p className="more-text">
        Find more on my Github
        <a
          href="https://www.github.com/philip-owen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} color="#35495e" size="2x" />
        </a>
      </p>
    </Container>
  );
};

const Container = styled.div`
  padding: 90px 50px;
  .more-text {
    text-align: center;
  }
`;
const SectionTitle = styled.div`
  font-size: 40px;
  text-align: center;
  h2 {
    margin-top: 0;
  }
`;
const SectionSubtitle = styled.p`
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 5px;
`;

export default Projects;
