import React from 'react';
import  styled  from 'styled-components'

const Tree = ({children}) => {

    const StyledTree = styled.div`
    line-height: 1.5;
    `;

    return (
    <StyledTree>{children}</StyledTree>
    );
};

export default Tree;