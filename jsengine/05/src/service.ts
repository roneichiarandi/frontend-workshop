import Posts from './assets/data/posts.json';
import { User } from './user';
import { Post } from './post';
import { BaseService } from './Services/base.service';

// https://jsonplaceholder.typicode.com/users

const baseUrl = "https://jsonplaceholder.typicode.com"
const userUrl = `${baseUrl}/users`
const postUrl = `${baseUrl}/posts`

export default class Service extends BaseService {

    constructor() {
        super();
    }

    async getUsers(): Promise<User[]> {
        const users = await this.FetchGet<User[]>(userUrl)
        const posts = await this.FetchGet<Post[]>(postUrl)
        return users.map(user => ({
            ...user,
            posts: posts.filter(post => post.userId == user.id)
        }));
    }

    async getPosts(): Promise<Post[]> {
        const posts = await this.XMLGet<Post[]>(postUrl)
        const users = await this.FetchGet<User[]>(userUrl)
        return posts.map(post => ({
            ...post,
            author: users.find(user => post.userId == user.id).name
        }));
        
    }
}