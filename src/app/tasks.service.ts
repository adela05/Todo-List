import { Injectable } from '@angular/core';

export class Task {
	title: string;
	completed: boolean;
	taskDetailText: string;
	constructor(title: string, completed: boolean, taskDetailText: string) {
		this.title = title;
		this.completed = completed;
		this.taskDetailText = taskDetailText;
	}
}

@Injectable({
	providedIn: 'root'
})
export class TasksService {
	// The string is replaced by Task to assign it to an Array
	tasks: Task[] = [
		new Task('walk the dog', false, ''),
		new Task('wash dishes', false, ''),
		new Task('wash the clothes', false, '')
	];

	constructor() {}
	addTasks(task: string) {
		this.tasks.push(new Task(task, false, ''));
	}
	deleteTask(i: number) {
		this.tasks.splice(i, 1);
	}
	// method that returns a string array
	getTasks(): Task[] {
		return this.tasks;
	}
}
