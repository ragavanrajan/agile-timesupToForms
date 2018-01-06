import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// add the PanelModule from primeng
import { PanelModule, MenuModule, ChartModule, InputTextModule,
   ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, 
   RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { FielderrorsComponent } from './components/fielderrors/fielderrors.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  // { path: "alltimes", component: AlltimesComponent },
  // { path: "timesheet", component: TimesheetComponent },
  { path: "projects", component: ProjectComponent },
  // { path: "profile", component: ProfileComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashboardComponent,
    ProjectComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    MenuModule,
    RouterModule.forRoot(appRoutes),
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
