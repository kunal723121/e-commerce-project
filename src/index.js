// import  ReactDom  from "react-dom";
// import App from "./App";
// ReactDom.render(<App/>,document.getElementById("kunal"))

import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('kunal');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<App />);