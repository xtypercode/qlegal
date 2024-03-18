import { Contact } from "../config/models/contact";
import { contacts } from "../data/contacts";

export class ContactRepository {
	private contacts: Contact[];

	constructor() {
		this.contacts = contacts;
	}

	addContact(newContact: Contact): void {
		this.contacts.push(newContact);
		console.log("Novo contato adicionado:", newContact);
		// Aqui você pode implementar a lógica para persistir o novo contato em um banco de dados, armazenamento local, API, etc.
	}

	getAllContacts(): Contact[] {
		return this.contacts;
	}

	clearContacts(): void {
		this.contacts = [];
	}
}
