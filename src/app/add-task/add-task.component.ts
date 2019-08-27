import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: [ './add-task.component.scss' ]
})
export class AddTaskComponent implements OnInit, OnDestroy {
	taskForm = this.fb.group({
		title: [ '', [ Validators.required, Validators.minLength(4) ] ], //each one should have a value of an Empty Array
		detailText: [ '' ]
	});
	valuesChangesSub: any;
	constructor(private tasksService: TasksService, private fb: FormBuilder) {}

	ngOnInit() {
		this.valuesChangesSub = this.taskForm.valueChanges.subscribe(
			// observables
			(res: any) => {
				//success
				console.log(this.taskForm);
				console.log(res);
			},
			(err) => {
				// error
				console.log(`Error: ${err}`);
			},
			() => {
				// complete
				console.log('Done');
			}
		);
	}
	ngOnDestroy() {
		// must have onDestroy() to Unsubscribe from these Observables
		if (this.valuesChangesSub) {
			this.valuesChangesSub.unsubscribe();
		}
	}
	onSubmit() {
		const title = this.taskForm.value.title;
		this.tasksService.addTasks(title);
	}
	onPatchSampleText() {
		// will only update the info
		this.taskForm.patchValue({
			detailText: 'Sample detail text'
		});
	}
	onSetSampleText() {
		// will over-write everything
		this.taskForm.setValue({
			title: 'setValue sample title',
			detailText: 'setValue sample detail text'
		});
	}
	onResetForm() {
		// resets all the values in the input boxes
		this.taskForm.reset();
	}
}
