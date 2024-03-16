import ContactActionButton from "../../../components/contacts/ContactActionButton";
import ContactListHeader from "../../../components/contacts/ContactListHeader";
import Pagination from "../../../components/contacts/Pagination";
import SearchFormContacts from "../../../components/contacts/SearchFormContacts";
import ContactTable from "../../../components/contacts/contacts-table/ContactTable";
import { contacts } from "../../../data/contacts";
import SidebarLayout from "../../../layouts/sidebar";

const ContactsPage = () => {
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
