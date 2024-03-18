import React, { useState, ChangeEvent, FormEvent } from "react";
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

const CUSTOM_TEXT_INPUT_THEME: CustomFlowbiteTheme["textInput"] = {
	field: {
		input: {
			colors: {
				gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-700 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
			},
		},
	},
};

const contactRepository = new ContactRepository();

const AddContactModal: React.FC = () => {
	const [openModal, setOpenModal] = useState(false);
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

	const handleSubmit = async (
		e: FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		try {
			await contactRepository.addContact(formData);
			console.log("Novo contato adicionado com sucesso!");
			setFormData({
				company: "",
				country: "",
				email: "",
				name: "",
				department: "",
				phoneNumber: "",
			});
			setOpenModal(false);
		} catch (error) {
			console.error("Erro ao adicionar novo contato:", error);
			// Trate o erro conforme necessário
		}
	};

	return (
		<>
			<Button onClick={() => setOpenModal(true)}>Novo contacto</Button>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ModalHeader>Adicionar novo contacto</ModalHeader>
				<ModalBody>
					<form onSubmit={handleSubmit}>
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<Label>Empresa</Label>
								<TextInput
									name="company"
									value={formData.company}
									onChange={handleInputChange}
									theme={CUSTOM_TEXT_INPUT_THEME}
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>País</Label>
								<TextInput
									name="country"
									value={formData.country}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Email</Label>
								<TextInput
									name="email"
									type="email"
									value={formData.email}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Nome</Label>
								<TextInput
									name="name"
									value={formData.name}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Departamento</Label>
								<TextInput
									name="department"
									value={formData.department}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<Label>Contacto</Label>
								<TextInput
									name="phoneNumber"
									type="number"
									value={formData.phoneNumber}
									onChange={handleInputChange}
								/>
							</div>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button
						type="submit"
						className="bg-primary-700 enabled:hover:bg-primary-800"
					>
						Adicionar contacto
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default AddContactModal;
