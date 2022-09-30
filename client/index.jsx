import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from "./app.jsx";

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
// );
// console.log(root);
const element = <h1>Hello, Kat</h1>;
// render(<App/>, root);

render(<App/>, document.getElementById('root'));