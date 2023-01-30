import ReactDOM from 'react-dom/client';  //importing ReactDOM from dependencies -> react + react-dom -> one giant library

import './index.css';  //injects css code
import App from './App';  //app.js file that is being imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  //normally this wouldn't work but because it's transformed before it's delivered to the browser
