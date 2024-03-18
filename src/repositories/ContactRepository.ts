import { Contact } from "../config/models/contact";
import { contacts } from "../data/contacts";

export class ContactRepository {
	private contactList: Contact[];

	constructor() {
		this.contactList = contacts;
	}

	addContact(newContact: Contact): void {
		this.contactList.push(newContact);
		console.log("Novo contato adicionado:", newContact);
		// Aqui você pode implementar a lógica para persistir o novo contato em um banco de dados, armazenamento local, API, etc.
	}

	getAllContacts(): Contact[] {
		return this.contactList;
	}

	editContact(email: string, editedContact: Contact): void {
		const index = this.contactList.findIndex(
			(contact) => contact.email === email
		);
		if (index !== -1) {
			this.contactList[index] = editedContact;
		} else {
			throw new Error("Contato não encontrado");
		}
	}

	clearContacts(): void {
		this.contactList = [];
	}
}
