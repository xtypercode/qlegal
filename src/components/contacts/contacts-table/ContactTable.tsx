import React, { useState } from "react";
import { Contact } from "../../../config/models/contact";
import ContactTableHeader from "./ContactTableHeader";
import ContactTableBody from "./ContactTableBody";
interface ContactTableProps {
	contacts: Contact[];
}

const ContactTable: React.FC<ContactTableProps> = ({ contacts }) => {
	const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

	const handleCheckboxChange = (contactId: string) => {
		setSelectedContacts((prevSelectedContacts) => {
			const isSelected = prevSelectedContacts.includes(contactId);
			return isSelected
				? prevSelectedContacts.filter((id) => id !== contactId)
				: [...prevSelectedContacts, contactId];
		});
	};

	return (
		<table className="min-w-full table-fixed divide-x divide-y divide-gray-200 dark:divide-gray-600">
			<ContactTableHeader />
			<ContactTableBody
				contacts={contacts}
				selectedContacts={selectedContacts}
				handleCheckboxChange={handleCheckboxChange}
			/>
		</table>
	);
};

export default ContactTable;
