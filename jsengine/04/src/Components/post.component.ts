import { Post } from "../post";

export class PostComponent {
    private posts: Post[];

    constructor(posts: Post[]) {
        this.posts = posts
    }

    render(): HTMLElement {
        const base = document.createElement('div');
        const header = document.createElement('h1');
        header.innerHTML = 'Dados de Posts';
        base.append(header);
        this.posts.map(this.createChild).forEach(child => base.appendChild(child));
       
        return base;
    }

    private createChild(post:Post):HTMLElement {
        const child = document.createElement('p');
        child.innerHTML = `Título: ${post.title} | Conteúdo: ${post.body} | Autor: ${post.author}`;

        return child;
    }
}

/**
 * outros formatos para criar a 
 */
// const PostPureComponent = (props: {posts: Post[]}) => {
//     return document.createElement('div')
// }

// const stringTex = `${variavel1} asdfasdf ${variavel2}`