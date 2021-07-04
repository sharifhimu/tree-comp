import React, {useState} from 'react';
import styled from 'styled-components'

const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
const Collapsible = styled.div`
  /* set the height depending on isOpen prop */
  height: ${p => (p.isOpen ? 'auto' : '0')};
  /* hide the excess content */
  overflow: hidden;
`;

const Folder = ({ name, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    return (
        <StyledFolder>
        <div className="folder--label" onClick={handleToggle}>
          <div style={{ width:'10px', height: '10px', backgroundColor: 'black' }} ></div>
          <span>{name}</span>
        </div>
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      </StyledFolder>
    );
};

export default Folder;