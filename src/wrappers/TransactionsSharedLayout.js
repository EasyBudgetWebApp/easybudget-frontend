import styled from 'styled-components';

const Wrapper = styled.div`
    //dimensions
    width: 100%;
    min-width: min-content;
    height: 100vh;
    min-height: 900px;

    //display and position
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 108px 1fr;
    grid-template-areas: 
    "sidebar nav"
    "sidebar content";
`;

export default Wrapper;