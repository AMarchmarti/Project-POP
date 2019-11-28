(function() {
    const currentDocument = document.currentScript.ownerDocument;

    class HeaderComponent extends HTMLElement {

        constructor() {
            super();
        }

        // Called when element is inserted in DOM
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });

            // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
            // Current document needs to be defined to get DOM access to imported HTML
            const template = currentDocument.querySelector('#header-template');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);

            // Extract the attribute user-id from our element.
            // Note that we are going to specify our cards like:
            // <user-card user-id="1"></user-card>
        }
    }
    customElements.define('app-header', HeaderComponent);
})();