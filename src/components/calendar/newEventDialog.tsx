import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import {
	Button,
	Modal,
	ModalBody,
	ModalHeader,
	TextInput,
} from "flowbite-react";
import { format } from "date-fns";
import { EventRepository } from "../../repositories/EventRepository";
import { Event } from "../../config/models/Event";

interface NewEventDialogProps {
	onAddEvent: (newEvent: Event) => void;
	selectedDay: Date;
}

const NewEventDialog: React.FC<NewEventDialogProps> = ({
	onAddEvent,
	selectedDay,
}) => {
	const [openModal, setOpenModal] = useState(false);

	const [eventData, setEventData] = useState<Event>({
		id: 1,
		title: "",
		locationOrLink: "",
		startDatetime: format(selectedDay, "yyyy-MM-dd"),
		endDatetime: format(selectedDay, "yyyy-MM-dd"),
		duration: "",
		description: "",
	});
	const eventRepository = new EventRepository();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEventData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			eventData.title.trim() !== "" &&
			eventData.startDatetime.trim() !== "" &&
			eventData.endDatetime.trim() !== ""
		) {
			try {
				await eventRepository.addEvent(eventData);
				onAddEvent(eventData);
				setEventData({
					id: 1,
					title: "",
					locationOrLink: "",
					startDatetime: format(selectedDay, "yyyy-MM-dd"),
					endDatetime: format(selectedDay, "yyyy-MM-dd"),
					duration: "",
					description: "",
				});
			} catch (error) {
				console.error("Erro ao adicionar evento:", error);
			}
		}
	};

	return (
		<>
			<Button
				className="flex items-center justify-center h-8 w-8 cursor-pointer bg-transparent   text-green-500 enabled:hover:text-white enabled:hover:bg-green-600 md:w-fit md:bg-green-400 md:text-white"
				onClick={() => setOpenModal(true)}
				aria-label="Adicionar novo evento"
			>
				<IoAddOutline className="text-xl" />
				<div className="span hidden md:inline">Novo evento</div>
			</Button>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ModalHeader>
					<h3 className="font-medium">Adicionar um novo evento</h3>
				</ModalHeader>
				<ModalBody>
					<div className="rounded-md bg-white">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col space-y-4"
						>
							<TextInput
								sizing="md"
								name="title"
								placeholder="Título"
								value={eventData.title}
								onChange={handleChange}
								required
							/>
							<TextInput
								sizing="md"
								name="locationOrLink"
								placeholder="Localização ou Link"
								value={eventData.locationOrLink}
								onChange={handleChange}
							/>
							<TextInput
								sizing="md"
								name="startDatetime"
								type="datetime-local"
								value={eventData.startDatetime}
								onChange={handleChange}
								required
							/>
							<TextInput
								sizing="md"
								name="endDatetime"
								type="datetime-local"
								value={eventData.endDatetime}
								onChange={handleChange}
								required
							/>
							<TextInput
								sizing="md"
								name="duration"
								placeholder="Duração"
								value={eventData.duration}
								onChange={handleChange}
							/>
							<TextInput
								sizing="md"
								name="description"
								placeholder="Descrição"
								value={eventData.description}
								onChange={handleChange}
							/>
							<Button
								type="submit"
								className="bg-primary-700 hover:bg-primary-800"
							>
								Adicionar evento
							</Button>
						</form>
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default NewEventDialog;
