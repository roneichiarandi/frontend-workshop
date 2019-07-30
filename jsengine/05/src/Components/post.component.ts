import { Post } from "../post";
import DomAdapter from "./dom.adapter";

export class PostComponent {
    private dom: DomAdapter;

    constructor() {
        this.dom = DomAdapter.getInstance();
    }

    render(posts: Post[]): HTMLElement {
        const base = this.dom.createElement('div');
        const header = this.dom.createElement('h1');
        header.innerHTML = 'Dados de Posts';
        base.append(header);

        for (let index in posts) {
            const post = posts[index];
            const el = this.createChild(post);
            base.appendChild(el);
        }

        return base
    }

    private createChild(post: Post): HTMLElement {
        const child = this.dom.createElement('p');
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