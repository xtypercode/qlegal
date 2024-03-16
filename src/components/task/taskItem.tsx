import React from "react";
import { Task } from "../../config/models/Task";
import { Checkbox, Label } from "flowbite-react";

/* 
TODO: Add a button to delete a task
TODO: Add the date when the task is created 
*/

interface TaskItemProps {
	task: Task;
	onComplete: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete }) => {
	const handleCheckboxChange = () => {
		onComplete(task.id);
	};

	return (
		<div
			className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
				task.completed ? "opacity-50 line-through text-gray-500" : ""
			}`}
			key={task.id}
		>
			<Checkbox
				id={`task-${task.id}`}
				checked={task.completed}
				onChange={handleCheckboxChange}
				title={task.name}
				className="w-5 h-5 cursor-pointer"
			/>
			<Label
				htmlFor={`task-${task.id}`}
				className="w-full cursor-pointer text-base"
			>
				{task.name}
			</Label>

			{/* {task.completed && (
				<span className="text-sm text-gray-300 ml-4">
					{" "}
					{task.completedAt &&
						new Date(task.completedAt).toLocaleDateString()}
				</span>
			)} */}
		</div>
	);
};

export default TaskItem;
