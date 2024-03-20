import React from "react";
import { Task } from "../../config/models/Task";
import TaskItem from "./taskItem";
import { Button } from "flowbite-react";
import { IoTrashOutline } from "react-icons/io5";

interface TaskListProps {
	tasks: Task[];
	onComplete: (taskId: number) => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete }) => {
	function handleDeleteTask(): void {
		throw new Error("Function not implemented.");
	}

	return (
		<div className="rounded-lg bg-white p-4">
			{tasks.map((task) => (
				<div className="flex justify-between items-center rounded-lg my-2 p-2 hover:bg-gray-200">
					<TaskItem
						key={task.id}
						task={task}
						onComplete={onComplete}
					/>
					<Button className="bg-transparent text-red-500 enabled:hover:bg-transparent enabled:hover:text-red-600 outline-none focus:ring-0 w-6 h-6" onClick={handleDeleteTask}>
						<IoTrashOutline className="text-xl" />
					</Button>
				</div>
			))}
		</div>
	);
};

export default TaskList;
