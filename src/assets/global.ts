import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        text-decoration: none;
        list-style: none;
        border: none;
    }

    :root {
        --primary-color: #4953D8;
        --secundary-color: #FEFEFE;
        --primary-200: #B8BEFB;
        --primary-100: #DBDEFD;
    }

    body, html {
        font-family: "Poppins", sans-serif;
        background-color: var(--secundary-color);
    }

`;
