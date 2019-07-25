import Icon from './assets/favicon.ico';
import Service from './service'
import './assets/style.css';
import { PostComponent } from './Components/post.component';
import { UserComponent } from './Components/user.component';

function headComponent() {
    const myIcon = document.createElement("link");
    myIcon.href = Icon;
    // <link type="image/x-icon" rel="shortcut icon" href="0b553fdbd277a17aa4eb48d3c048acf7.ico">
    myIcon.type = "image/x-icon";
    myIcon.rel = "shortcut icon";

    return myIcon
}

const service = new Service();

const postComponent = new PostComponent(service.getPosts());
const userComponent = new UserComponent(service.getUsers());

// console.log(service.getUsers());
// console.log(service.getPosts());

document.head.appendChild(headComponent());
document.body.appendChild(userComponent.render())
document.body.appendChild(postComponent.render())
