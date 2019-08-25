import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TasksService, Task } from '../tasks.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
	tasks: Task[] = [];
	displayList: boolean = true;
	newTaskText: string = '';
	taskIdsBeingEdited = {};
	taskBeingDisplayed: Task;
	//image = 'assets/fabrizio-conti-548615-unsplash'; //add an image in the quotations
	newItem: string = 'TEK';
	isSpecial = true;
	// import tasks service as private
	constructor(private tasksService: TasksService) {}

	ngOnInit() {
		this.getTasks();
		// console.log('Component starting..');
	}
	ngAfterViewInit() {
		console.log('Component was viewed');
	}
	ngOnDestroy() {
		console.log('Component is ready to be destroyed');
	}
	onToggleDisplay() {
		this.displayList = !this.displayList;
	}
	onDeleteTask(i: number) {
		this.tasksService.deleteTask(i);
		this.getTasks();
	}
	onCreateNewTask(text: string) {
		this.tasksService.addTasks(text);
		this.newTaskText = '';
		this.getTasks();
	}
	onStartEditTask(i: number) {
		this.taskIdsBeingEdited[i] = true;
	}
	onSaveEditTask(i: number) {
		this.taskIdsBeingEdited[i] = false;
	}
	getTasks() {
		setTimeout(() => {
			this.tasks = this.tasksService.getTasks();
		}, 0);
	}
	onViewTaskDetails(task: Task) {
		this.taskBeingDisplayed = task;
	}
	// mouseover() {
	// 	this.displayList = !this.displayList;
	// }
}
