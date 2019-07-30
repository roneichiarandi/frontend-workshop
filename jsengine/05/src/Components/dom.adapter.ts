export default class DomAdapter {
    
    protected dom: Document;
    protected elements: HTMLElement[];
    protected static instance: DomAdapter;

    private constructor() {
        this.dom = document;
        this.elements = [];
    }

    public static getInstance() {
        return this.instance || (this.instance = new this());
    }

    public createElement(
        tag: string,
        options: ElementCreationOptions = null
    ): HTMLElement {
        const el = this.dom.createElement(tag, options);
        this.elements.push(el);
        return el;
    }

    public appendBodyElement(element: HTMLElement) {
        this.dom.body.appendChild(element);
    }

    public appendHeadElement(element: HTMLElement) {
        this.dom.head.appendChild(element);
    }
}