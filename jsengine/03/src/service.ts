import Posts from './assets/data/posts.json';
import Users from './assets/data/users.json';
import { User } from './user';
import { Post } from './post';

export default class Service {
    private users: User[];
    private posts: Post[];

    constructor() {
        this.posts = Posts;
        this.users = Users;
    }

    getUsers(): User[] {
        return this.users.map(user => ({
            ...user,
            posts: this.posts.filter(post => post.userId == user.id)
        }));
    }

    getPosts(): Post[] {
        return this.posts.map(post => ({
            ...post,
            author: this.users.find(user => user.id == post.userId).name
        }));
        
    }
}