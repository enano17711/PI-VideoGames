import React from 'react';
import styled from "styled-components";

const ProjectsGridStyleWrapper = styled.section`
  height: auto;
  background: #090a1a;
  position: relative;
  width: 100%;
`;
const ListWrapper = ({children}) => {
    return (
        <ProjectsGridStyleWrapper>
            {children}
        </ProjectsGridStyleWrapper>
    );
};

export default ListWrapper;