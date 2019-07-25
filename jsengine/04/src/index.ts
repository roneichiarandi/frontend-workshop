import Icon from './assets/favicon.ico';
import Service from './service'
import './assets/style.css';
import { PostComponent } from './Components/post.component';
import { UserComponent } from './Components/user.component';

function headComponent() {
    const myIcon = document.createElement("link");
    myIcon.href = Icon;
    myIcon.type = "image/x-icon";
    myIcon.rel = "shortcut icon";

    return myIcon
}

document.head.appendChild(headComponent());

const service = new Service();

Promise.all([service.getUsers(), service.getPosts()]).then(data => {
    const [users, posts] = data;

    const userComponent = new UserComponent(users)
    document.body.appendChild(userComponent.render())

    const postComponent = new PostComponent(posts);
    document.body.appendChild(postComponent.render())
})