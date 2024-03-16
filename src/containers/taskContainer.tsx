import React, { useEffect, useState } from "react";
import { Task } from "../config/models/Task";
import { TaskRepository } from "../repositories/TaskRepository";
import TaskList from "../components/task/taskList";
import NewTaskForm from "../components/task/newTaskDialog";

const TaskContainer: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskRepository, setTaskRepository] = useState<TaskRepository | null>(
		null
	);

	useEffect(() => {
		if (!taskRepository) {
			setTaskRepository(new TaskRepository());
		}
	}, [taskRepository]);

	useEffect(() => {
		if (taskRepository) {
			fetchTasks(taskRepository);
		}
	}, [taskRepository]);

	const fetchTasks = async (taskRepository: TaskRepository) => {
		try {
			const tasks = await taskRepository.getAllTasks();
			setTasks(tasks);
		} catch (error) {
			console.error("Error fetching tasks:", error);
		}
	};

	const handleCompleteToggle = async (taskId: number) => {
		try {
			const updatedTasks = tasks.map((task) =>
				task.id === taskId
					? { ...task, completed: !task.completed }
					: task
			);
			setTasks(updatedTasks);
			await taskRepository?.updateTaskCompletion(
				taskId,
				!updatedTasks.find((task) => task.id === taskId)?.completed
			);
		} catch (error) {
			console.error("Error toggling task completion:", error);
		}
	};

	const handleAddTask = async (taskName: string) => {
		try {
			const newTask = await taskRepository?.addTask(taskName);
			if (newTask) {
				setTasks((prevTasks) => [...prevTasks, newTask]);
			}
		} catch (error) {
			console.error("Error adding task:", error);
		}
	};

	return (
		<div className="w-full">
			<div className="my-8 flex items-center justify-between text-2xl font-semibold text-primary">
				<h2 className="">Tarefas de hoje</h2>

				<NewTaskForm onAddTask={handleAddTask} />
			</div>
			
			<TaskList tasks={tasks} onComplete={handleCompleteToggle} />{" "}
		</div>
	);
};

export default TaskContainer;
