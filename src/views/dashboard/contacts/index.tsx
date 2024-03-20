import { useEffect, useState } from "react";
import ContactListHeader from "../../../components/contacts/ContactListHeader";
import Pagination from "../../../components/contacts/Pagination";
import SearchFormContacts from "../../../components/contacts/SearchFormContacts";
import ContactTable from "../../../components/contacts/contacts-table/ContactTable";
import SidebarLayout from "../../../layouts/sidebar";
import { Contact } from "../../../config/models/contact";
import { ContactRepository } from "../../../repositories/ContactRepository";
import AddContactModal from "../../../components/contacts/AddContactModal";
import { Button } from "flowbite-react";

const contactRepository = new ContactRepository();

const ContactsPage = () => {
	const [contacts, setContacts] = useState([] as Contact[]);

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const allContacts = contactRepository.getAllContacts();
				setContacts(allContacts);
			} catch (error) {
				console.error("Erro ao carregar contactos:", error);
			}
		};

		fetchContacts();
	}, []);

	const handleContactAdded = (newContact: Contact) => {
		setContacts([...contacts, newContact]);
	};

	const handleContactEdited = (editedContact: Contact) => {
		setContacts((prevContacts) =>
			prevContacts.map((contact) =>
				contact.email === editedContact.email ? editedContact : contact
			)
		);
	};

	return (
		<SidebarLayout>
			<main className="container max-w-full lg:max-w-screen-xl md:max-w-screen-lg ">
				<h1 className="mb-4 px-4 text-3xl font-bold">Contactos</h1>
				<div className="overflow-x-hidden">
					<ContactListHeader>
						<SearchFormContacts />

						<div className="ml-auto flex items-center space-x-2 sm:space-x-3">
							<AddContactModal
								onContactAdded={handleContactAdded}
							/>

							<Button
								href="#"
								className="border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 sm:w-auto"
							>
								<svg
									className="-ml-1 mr-2 h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
										clipRule="evenodd"
									></path>
								</svg>
								Exportar
							</Button>
						</div>
					</ContactListHeader>
				</div>

				<div className="overflow-x-auto">
					<div className="inline-block min-w-full align-middle">
						<div className="overflow-hidden shadow">
							<ContactTable
								contacts={contacts}
								onContactEdited={handleContactEdited}
							/>
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
