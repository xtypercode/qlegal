import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "flowbite-react";
import { Contact } from "../../config/models/contact";
import { ContactRepository } from "../../repositories/ContactRepository";

interface DeleteContactModalProps {
	contact: Contact;
}

const contactRepository = new ContactRepository();

const DeleteContactModal: React.FC<DeleteContactModalProps> = ({ contact }) => {
	const [openModal, setOpenModal] = useState(false);
	const [contactToDelete, setContactToDelete] = useState<Contact | null>(
		null
	);

	const handleOpenModal = (contact: Contact) => {
		setContactToDelete(contact);
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setContactToDelete(null);
		setOpenModal(false);
	};

	const handleDeleteContact = () => {
		if (contactToDelete) {
			contactRepository.deleteContact(contactToDelete.email);
			console.log();

			setContactToDelete(null);
			setOpenModal(false);
		}
	};

	return (
		<>
			<Button
				className="bg-red-500 enabled:hover:bg-red-600"
				onClick={() => handleOpenModal(contact)}
			>
				Eliminar
			</Button>
			<Modal show={openModal} onClose={handleCloseModal}>
				<ModalHeader>Adicionar novo contacto</ModalHeader>
				<ModalBody>
					<p className="leading-4">
						Tem certeza que deseja excluir o contato{" "}
						{contactToDelete?.name}?
					</p>
				</ModalBody>
				<ModalFooter>
					<Button
						className="bg-red-500 hover:bg-red-600"
						onClick={handleDeleteContact}
					>
						Apagar
					</Button>
					<Button
						className="bg-gray-300 hover:bg-gray-400"
						onClick={handleCloseModal}
					>
						Cancelar
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default DeleteContactModal;
