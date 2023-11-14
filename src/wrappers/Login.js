import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--eb-80CBC4);;
    
    div {
        margin: 0;
    }

    .credentials-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export default Wrapper;