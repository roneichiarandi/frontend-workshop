import { User } from "../user";
import DomAdapter from "./dom.adapter";

export class UserComponent {

    render(users: User[]): HTMLElement {
        const domAdapter = DomAdapter.getInstance();
        const root = domAdapter.createElement('div');
        const header = domAdapter.createElement('h1');
        header.innerHTML = 'Dados de Usuários';
        root.append(header);

        users.map(user => {
            const el = domAdapter.createElement('p');
            el.innerHTML = `Nome: ${user.name} | Email: ${user.email} | Number of posts: ${user.posts.length}`;

            return el
        }).forEach(child => root.appendChild(child));

        return root
    }
}

/**
 * outros formatos para criar a
 */
// const UserPureComponent = (props: {users: User[]}) => {
//     return document.createElement('div')
// }

// const stringTex = `${variavel1} asdfasdf ${variavel2}`