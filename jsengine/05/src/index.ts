import Icon from './assets/favicon.ico';
import Service from './service'
import './assets/style.css';
import { PostComponent } from './Components/post.component';
import { UserComponent } from './Components/user.component';
import FaviconComponent from './Components/favicon.component';
import DomAdapter from "./Components/dom.adapter";

const domAdapter = DomAdapter.getInstance();

const favicon = new FaviconComponent();
domAdapter.appendHeadElement(favicon.render(Icon))

const service = new Service();

Promise.all([service.getUsers(), service.getPosts()]).then(data => {
    const [users, posts] = data;

    const userComponent = new UserComponent()
    domAdapter.appendBodyElement(userComponent.render(users))


    const postComponent = new PostComponent();
    domAdapter.appendBodyElement(postComponent.render(posts))
})