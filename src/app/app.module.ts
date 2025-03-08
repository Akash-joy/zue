import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { InplaceModule } from 'primeng/inplace';
import { WorkFullDetailComponent } from './work/work-full-detail/work-full-detail.component';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AdminpageComponent,
    WorkFullDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StyleClassModule,
    MenubarModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    FileUploadModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    TableModule,
    InplaceModule,
    DialogModule,
    ChipModule,
    SelectButtonModule,
    DynamicDialogModule
  ],
  providers: [MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
