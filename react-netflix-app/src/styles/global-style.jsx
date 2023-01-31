const { Global, css } = require('@emotion/react');

const style = css`
  :root {
    --background-color: #0e0e0e;
    --background-card-color: #181818;
    --primary-text-color: white;
    --secondary-text-color: #808080;
    --divider-color: #303030;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: var(--background-color);
    color: var(--primary-text-color);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
