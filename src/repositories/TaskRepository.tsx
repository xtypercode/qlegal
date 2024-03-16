import { Task } from "../config/models/Task";

const mockTasks: Task[] = [
	{ id: 1, name: "Tarefa 1", completed: false },
	{ id: 2, name: "Tarefa 2", completed: false },
	{ id: 3, name: "Tarefa 3", completed: false },
];

export class TaskRepository {
	getAllTasks(): Promise<Task[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(mockTasks);
			}, 500);
		});
	}

	updateTaskCompletion(taskId: number, completed: boolean): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const taskIndex = mockTasks.findIndex(
					(task) => task.id === taskId
				);
				if (taskIndex !== -1) {
					mockTasks[taskIndex].completed = completed;
					mockTasks[taskIndex].completedAt = completed
						? new Date()
						: undefined;
					resolve();
				} else {
					reject(new Error("Task not found"));
				}
			}, 200);
		});
	}

	addTask(taskName: string): Promise<Task> {
		return new Promise((resolve) => {
			setTimeout(() => {
				const newTask: Task = {
					id: mockTasks.length + 1,
					name: taskName,
					completed: false,
				};
				mockTasks.push(newTask);
				resolve(newTask);
			}, 200);
		});
	}
}
