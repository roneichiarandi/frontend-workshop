import Icon from './favicon.ico';
import './style.css';

function component() {
    const myIcon = document.createElement("link");
    myIcon.href = Icon;
    // <link type="image/x-icon" rel="shortcut icon" href="0b553fdbd277a17aa4eb48d3c048acf7.ico">
    myIcon.type = "image/x-icon";
    myIcon.rel = "shortcut icon";

    return myIcon
}

document.head.appendChild(component());
