import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { WorkDetails } from 'src/interfaces/work-details';
import { WorkStatusService } from 'src/Service/work-status.service';

@Component({
  selector: 'app-work-full-detail',
  templateUrl: './work-full-detail.component.html',
  styleUrls: ['./work-full-detail.component.scss']
})
export class WorkFullDetailComponent implements OnInit, OnDestroy {
  UpdatedWorkDetails!: WorkDetails;
  workdetails: any;
  workStatus!: { id: number, name: string }[];
  WorkDetailsForm!: FormGroup;
  dataReady: boolean = false;
  work_statusFeildValue!: { id: number, name: string };

  constructor(
    private workStatusService: WorkStatusService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.config.data) {
      this.workdetails = this.config.data.workdetails;
      this.workStatus = this.config.data.workStatus;
      this.UpdatedWorkDetails = this.workdetails;
      this.work_statusFeildValue = this.workdetails.work_status;
      this.initializeForm(this.workdetails)

    }
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close(this.UpdatedWorkDetails);
    }
  }

  initializeForm(formValue: Partial<WorkDetails> | undefined) {
    this.WorkDetailsForm = this.workStatusService.initializeForm(formValue);
    this.dataReady = true;
  }
  updateWorkDetails(controlName: string) {
    if (controlName === 'estimated_date') {
      const selectedDate = new Date(this.WorkDetailsForm.value[controlName]);
      const formattedDate = selectedDate.getFullYear() + '-' +
                            String(selectedDate.getMonth() + 1).padStart(2, '0') + '-' +
                            String(selectedDate.getDate()).padStart(2, '0');
      this.WorkDetailsForm.patchValue({ estimated_date: formattedDate });
    }

    const updatedValue = this.WorkDetailsForm.get(controlName)?.value;
    const data = { [controlName]: updatedValue };
    this.updateFormFeild(data)

  }
  updateFormFeild(data: any) {
    this.workStatusService.updateTask(this.WorkDetailsForm.value.id, data).subscribe({
      next: (res: WorkDetails) => {
        this.initializeForm(res);
        this.UpdatedWorkDetails = res;
      }
    });
  }
  workStatusUpdate(event: SelectButtonChangeEvent) {
    const data = {'work_status': event.value}
    this.updateFormFeild(data)

  }
}
