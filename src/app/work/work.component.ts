import { Component, OnInit } from '@angular/core';
import { WorkStatusService } from 'src/Service/work-status.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { WorkDetails } from 'src/interfaces/work-details';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WorkFullDetailComponent } from './work-full-detail/work-full-detail.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workForm!: FormGroup;
  taskList: any= [];
  dataReady: boolean = false;
  ref: DynamicDialogRef | undefined;


  constructor(private workStatusService: WorkStatusService,
    public dialogService: DialogService) {}

  ngOnInit(): void {
    this.workForm = this.workStatusService.initializeForm();
    this.loadWorkStatuses();
  }

  private loadWorkStatuses(): void {
    this.workStatusService.getStates().pipe(take(1)).subscribe({
      next: (res) => {
        this.taskList = res;
        this.taskList.work_status.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
        this.dataReady = true;
      },
      error: (err) => console.error('Failed to load work statuses', err)
    });
  }

  addTask() {
    const estimatedDate = this.workForm.value.estimated_date;

    if (this.workForm.valid) {
      const formattedDate = new Date(estimatedDate).toISOString().split('T')[0]; // Converts to YYYY-MM-DD
      this.workForm.patchValue({ estimated_date: formattedDate });
      this.workStatusService.createTask(this.workForm.value).subscribe({
        next: (res) => {
          this.workForm.reset();
          this.taskList.tasks.push(res)
        }
      })
    }
  }
  deleteTask(id: number) {
    this.workStatusService.deleteTask(id).subscribe({
      next: (res) => {
        this.taskList.tasks = this.taskList.tasks.filter((taskId: number) => taskId !== id);
      }
    })
  }
  showDetails(task: WorkDetails) {
    this.ref = this.dialogService.open(WorkFullDetailComponent, {
      data: {
        workdetails: task,
        workStatus: this.taskList.work_status
      },
      header: 'Work Details',
      width: '90%',
      closable: true
  });
  this.ref.onClose.subscribe((updatedData: WorkDetails) => {
    if (updatedData) {
      const index = this.taskList.tasks.findIndex((task: WorkDetails) => task.id === updatedData.id);
      if (index !== -1) {
        this.taskList.tasks[index].customer_name = updatedData.customer_name;
        this.taskList.tasks[index].work = updatedData.work;
        this.taskList.tasks[index].estimated_date = updatedData.estimated_date;
        this.taskList.tasks[index].work_status = updatedData.work_status;
    }
    }
  });
  }
}
//error handling
//table style is not responsive
