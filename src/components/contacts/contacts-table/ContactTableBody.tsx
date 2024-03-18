import React from "react";
import { Contact } from "../../../config/models/contact";
import ContactTableRow from "./ContactTableRow";

interface ContactTableBodyProps {
	contacts: Contact[];
	selectedContacts: string[];
	handleCheckboxChange: (contactId: string) => void;
	onContactEdited: (editedContact: Contact) => void;
}

const ContactTableBody: React.FC<ContactTableBodyProps> = ({
	contacts,
	selectedContacts,
	handleCheckboxChange,
	onContactEdited,
}) => {
	return (
		<tbody className="divide-x divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
			{contacts.map((contact) => (
				<ContactTableRow
					key={contact.name}
					contact={contact}
					selectedContacts={selectedContacts}
					handleCheckboxChange={handleCheckboxChange}
					onContactEdited={onContactEdited}
				/>
			))}
		</tbody>
	);
};

export default ContactTableBody;
