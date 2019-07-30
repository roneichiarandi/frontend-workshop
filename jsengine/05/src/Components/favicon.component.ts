import DomAdapter from "./dom.adapter";
export default class FaviconComponent {
    render(icon: any): HTMLElement {
        const domAdapter = DomAdapter.getInstance();
        const el = domAdapter.createElement("link")

        el.setAttribute('href', icon)
        el.setAttribute('type', "image/x-icon")
        el.setAttribute('rel', 'shortcut icon')

        return el;
    }
}