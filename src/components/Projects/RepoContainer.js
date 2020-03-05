import React from "react";
import styled from "styled-components";

import Repo from "./Repo";
import Error from "./Error";

const RepoContainer = props => {
  return (
    <Container>
      {props.loaded ? (
        props.repos.length > 0 ? (
          props.repos.map(repo => <Repo repo={repo} key={repo.id} />)
        ) : (
          <Error />
        )
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default RepoContainer;
