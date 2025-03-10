import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';
import { WorkDetails } from 'src/interfaces/work-details';

@Injectable({
  providedIn: 'root'
})
export class WorkStatusService {

  constructor(private http: HttpClient) {}

  initializeForm(formValue: Partial<WorkDetails> = {}) {
    return new FormGroup({
      work_status: new FormControl(formValue?.work_status?.id ?? null),
      id: new FormControl(formValue?.id ?? null),
      customer_name: new FormControl(formValue?.customer_name ?? null, Validators.required),
      phone_number: new FormControl(formValue?.phone_number ?? null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      work: new FormControl(formValue?.work ?? null, Validators.required),
      created_date: new FormControl({value: formValue?.created_date ? new Date(formValue.created_date) : null, disabled: true}),
      estimated_date: new FormControl(formValue?.estimated_date ? new Date(formValue.estimated_date) : null, Validators.required),
      description: new FormControl(formValue?.description ?? null, Validators.required),
    });
  }

  getStates(): Observable<any> {
    return this.http.get<any[]>(`${environment.baseUrl}states/`);
  }

  createTask(taskData: any) {
    return this.http.post(`${environment.baseUrl}tasks/`, taskData);
  }

  updateTask(id: number, data: any): Observable<WorkDetails> {
    return this.http.patch<WorkDetails>(`${environment.baseUrl}tasks/update/${id}/`, data);
  }

  deleteTask(id: number) {
    return this.http.delete(`${environment.baseUrl}tasks/${id}/`);
  }
}
