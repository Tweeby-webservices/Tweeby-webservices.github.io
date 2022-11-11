import { mapListToDOMElements } from "./domInteractions.js";

class Tweeby {
    constructor () {
        this.viewElements = {};
        this.InitializeApp();
    };

    InitializeApp = () => {
        this.connectDOMElements();
        this.setupListeners();
    };

    connectDOMElements = () => {
        // Mapping chosen DOM elements to the lists.
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(element => element.id);
        const listOfButtons = Array.from(document.querySelectorAll('[data-offer-name]')).map(element => element.dataset.offerName);

        this.viewElements = mapListToDOMElements(listOfIds, 'id');
        this.offerButtons = mapListToDOMElements(listOfButtons, 'data-offer-name');
    };

    setupListeners = () => {
        Object.keys(this.offerButtons).forEach(offerName => {
            this.offerButtons[offerName].addEventListener('click', this.goToContactForm);
        });
        this.viewElements.contactForm.addEventListener('submit', this.sendEmail)
    };

    goToContactForm = event => {
        const contactForm = this.viewElements.contactForm;
        let msg = `Dzień dobry.\n\nKontaktuje się w sprawie współpracy długoterminowej w pakiecie "${event.target.dataset.offerName}".\nProszę o więcej informacji w odpowiedzi na maila podanego w formularzu.`;
        contactForm.scrollIntoView({behavior: 'smooth', block: 'center'});
        contactForm.childNodes[13].value = msg;
    };

    sendEmail = event => {
        event.preventDefault();
        // SENDING MAIL
        if (this.viewElements.newsletter.checked) {
            // SENDING NEWSLETTER
        };
    };
};

document.addEventListener('DOMContentLoaded', new Tweeby());
