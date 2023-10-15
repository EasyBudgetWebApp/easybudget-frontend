import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 140px;
    background-color: rgba(0, 0, 0, 0.1);

    display: flex;

    .additional_buttons {
        display: flex;
        align-items: center;
        column-gap: 40px;
        font-weight: 500;
        font-size: 22px;
        line-height: 25.78px;
        font-weight: bold;
    }

    h1 {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: var(--black);
    }

    a:hover {
        color: var(--budget-purple);
    }
`;

export default Wrapper;