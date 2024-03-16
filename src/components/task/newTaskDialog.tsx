import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import {
	Button,
	Modal,
	ModalBody,
	ModalHeader,
	TextInput,
} from "flowbite-react";

interface NewTaskFormProps {
	onAddTask: (taskName: string) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({ onAddTask }) => {
	const [taskName, setTaskName] = useState("");
	const [openModal, setOpenModal] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (taskName.trim() !== "") {
			onAddTask(taskName);
			setTaskName("");
		}
	};

	return (
		<>
			<Button
				className="h-5 w-5 bg-transparent p-4 text-primary enabled:hover:text-green-500 enabled:hover:bg-transparent"
				aria-label="Add task"
				onClick={() => setOpenModal(true)}
			>
				<IoAddOutline className="text-2xl" />{" "}
			</Button>

			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ModalHeader>Adicionar uma nova tarefa</ModalHeader>
				<ModalBody>
					<form
						onSubmit={handleSubmit}
						className="flex h-10 w-full items-center justify-between gap-2"
					>
						<TextInput
							sizing="md"
							placeholder="Nova tarefa"
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
							className="h-full w-4/6"
							required
						/>
						<Button
							type="submit"
							className="bg-primary-700 enabled:hover:bg-primary-800"
							aria-label="Adicionar tarefa"
						>
							Adicionar
						</Button>
					</form>
				</ModalBody>
			</Modal>
		</>
	);
};

export default NewTaskForm;
