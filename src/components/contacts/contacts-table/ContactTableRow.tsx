import React from "react";
import { Button } from "flowbite-react";
import { Contact } from "../../../config/models/contact";

export interface ContactTableRowProps {
	contact: Contact;
	selectedContacts: string[];
	handleCheckboxChange: (contactId: string) => void;
}

const ContactTableRow: React.FC<ContactTableRowProps> = ({
	contact,
	selectedContacts,
	handleCheckboxChange,
}) => {
	const isChecked = selectedContacts.includes(contact.name);

	const handleCheckboxClick = () => {
		handleCheckboxChange(contact.name);
	};

	const onDeleteClick = () => {
		// Lógica para exclusão do contact
	};

	const onEditClick = () => {
		// Lógica para edição do contact
	};

	return (
		<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
			<td className="w-4 p-4">
				<div className="flex items-center">
					<input
						id={`checkbox-${contact.name}`}
						aria-describedby="checkbox-1"
						type="checkbox"
						className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
						checked={isChecked}
						onChange={handleCheckboxClick}
					/>
					<label
						htmlFor={`checkbox-${contact.name}`}
						className="sr-only"
					>
						checkbox
					</label>
				</div>
			</td>

			<td className="max-w-sm whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				{contact.company}
			</td>
			<td className="whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				{contact.country}
			</td>
			<td className="whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				{contact.email}
			</td>
			<td className="whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				{contact.name}
			</td>
			<td className="whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				{contact.department}
			</td>
			<td className="whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				{contact.phoneNumber}
			</td>
			<td className="flex whitespace-nowrap p-4 text-xs font-medium text-gray-900 dark:text-white">
				<Button
					onClick={() => onEditClick()}
					className="mr-2  bg-blue-500 text-white enabled:hover:bg-blue-600"
				>
					Editar
				</Button>
				<Button
					onClick={() => onDeleteClick()}
					className=" bg-red-500 text-white enabled:hover:bg-red-600"
				>
					Eliminar
				</Button>
			</td>
		</tr>
	);
};

export default ContactTableRow;
