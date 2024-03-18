import { useEffect, useState } from "react";
import ContactActionButton from "../../../components/contacts/ContactActionButton";
import ContactListHeader from "../../../components/contacts/ContactListHeader";
import Pagination from "../../../components/contacts/Pagination";
import SearchFormContacts from "../../../components/contacts/SearchFormContacts";
import ContactTable from "../../../components/contacts/contacts-table/ContactTable";
import SidebarLayout from "../../../layouts/sidebar";
import { Contact } from "../../../config/models/contact";
import { ContactRepository } from "../../../repositories/ContactRepository";

const contactRepository = new ContactRepository();

const ContactsPage = () => {
	const [contacts, setContacts] = useState([] as Contact[]);

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const allContacts = contactRepository.getAllContacts();
				setContacts(allContacts);
			} catch (error) {
				console.error("Erro ao carregar contatos:", error);
				// Tratar erro, se necessário
			}
		};

		fetchContacts();
	}, []);
	return (
		<SidebarLayout>
			<main className="container max-w-full lg:max-w-screen-xl md:max-w-screen-lg ">
				<h1 className="mb-4 px-4 text-3xl font-bold">Contactos</h1>
				<div className="overflow-x-hidden">
					<ContactListHeader>
						<SearchFormContacts />
						<ContactActionButton />
					</ContactListHeader>
				</div>

				<div className="overflow-x-auto">
					<div className="inline-block min-w-full align-middle">
						<div className="overflow-hidden shadow">
							<ContactTable contacts={contacts} />
						</div>
					</div>
				</div>

				<Pagination
					currentPage={1}
					totalPages={1}
					onPageChange={() => {}}
				/>
			</main>
		</SidebarLayout>
	);
};

export default ContactsPage;
