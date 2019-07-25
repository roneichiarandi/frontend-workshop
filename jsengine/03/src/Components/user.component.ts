import { User } from "../user";

export class UserComponent {
    private users: User[];

    constructor(users: User[]) {
        this.users = users
    }

    render(): HTMLElement {
        const base = document.createElement('div');
        const header = document.createElement('h1');
        header.innerHTML = 'Dados de Usuários';
        base.append(header);
        this.users.map(this.createChild).forEach(child => base.appendChild(child));
       
        return base;
    }

    private createChild(user:User):HTMLElement {
        const child = document.createElement('p');
        child.innerHTML = `Nome: ${user.name} | Email: ${user.email} | Number of posts: ${user.posts.length}`;

        return child;
    }
}

/**
 * outros formatos para criar a 
 */
// const UserPureComponent = (props: {users: User[]}) => {
//     return document.createElement('div')
// }

// const stringTex = `${variavel1} asdfasdf ${variavel2}`