import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
	Button,
	CustomFlowbiteTheme,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	TextInput,
} from "flowbite-react";
import { Contact } from "../../config/models/contact";
import { ContactRepository } from "../../repositories/ContactRepository";
import ToastMessage from "../toast/ToastMessage";
import { showToastWithTimeout } from "../toast/utils/toast";

const CUSTOM_TEXT_INPUT_THEME: CustomFlowbiteTheme["textInput"] = {
	field: {
		input: {
			colors: {
				gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-700 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-primary-500",
			},
		},
	},
};

const contactRepository = new ContactRepository();

interface AddContactModalProps {
	onContactAdded: (newContact: Contact) => void;
}

const AddContactModal: React.FC<AddContactModalProps> = ({
	onContactAdded,
}) => {
	const [openModal, setOpenModal] = useState(false);
	const [toastMessage, setToastMessage] = useState<string>("");

	const [formData, setFormData] = useState<Contact>({
		company: "",
		country: "",
		email: "",
		name: "",
		department: "",
		phoneNumber: "",
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const newContact = { ...formData };
			contactRepository.addContact(newContact);
			setFormData({
				company: "",
				country: "",
				email: "",
				name: "",
				department: "",
				phoneNumber: "",
			});
			setOpenModal(false);
			setToastMessage("Contacto adicionado com sucesso!");
			onContactAdded(newContact);
		} catch (error) {
			setToastMessage("Erro ao adicionar contacto");
			console.error("Erro ao adicionar novo contacto:", error);
		}
	};

	useEffect(() => {
		if (toastMessage) {
			showToastWithTimeout(toastMessage, setToastMessage);
		}
	}, [toastMessage]);

	return (
		<>
			<Button
				className="bg-primary-700 enabled:hover:bg-primary-800"
				onClick={() => setOpenModal(true)}
			>
				Novo contacto
			</Button>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ModalHeader>Adicionar novo contacto</ModalHeader>
				<ModalBody>
					<form id="addContactForm" onSubmit={handleSubmit}>
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<Label>Empresa</Label>
								<TextInput
									name="company"
									value={formData.company}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
									required
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>País</Label>
								<TextInput
									name="country"
									value={formData.country}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
									required
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Email</Label>
								<TextInput
									name="email"
									type="email"
									value={formData.email}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
									required
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Nome</Label>
								<TextInput
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
									required
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Departamento</Label>
								<TextInput
									name="department"
									value={formData.department}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
									required
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Contacto</Label>
								<TextInput
									name="phoneNumber"
									type="number"
									value={formData.phoneNumber}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
									required
								/>
							</div>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button
						type="submit"
						className="bg-primary-700 enabled:hover:bg-primary-800 focus:ring-0"
						form="addContactForm"
					>
						Adicionar contacto
					</Button>
				</ModalFooter>
			</Modal>
			{toastMessage && (
				<ToastMessage
					message={toastMessage}
					onClose={() => setToastMessage("")}
				/>
			)}
		</>
	);
};

export default AddContactModal;
