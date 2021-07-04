import React from 'react';
import styled from 'styled-components'
import '../icon.css'

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;


const Filecomp = ({name}) => {
    return (
        <StyledFile>
        <div style={{ width:'5px', height: '5px', backgroundColor: 'black' }} ></div>
        <span>{name}</span>
        </StyledFile>
    );
};

export default Filecomp;