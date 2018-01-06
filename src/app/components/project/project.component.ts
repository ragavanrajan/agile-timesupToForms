import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // Add the FormGroup import from @angular/forms/ for validation 
projectForm : FormGroup;
// For date property- so that they cant select before date 
  minProjectDate = new Date();
//  For Dropdown data backing
  allDevs = [

    { label: 'Jill', value: 'Jill Cool' },
    { label: 'Joe', value: 'Joe Cool' },
    { label: 'Mary', value: 'Mary Cool' },
    { label: 'Susan', value: 'Susan Jones' },
    { label: 'Phil', value: 'Phil Stephens' },
    { label: 'Karen', value: 'Karen Phillips' },
    { label: 'Chris', value: 'Chris Hampton' },
    { label: 'Si', value: 'Si Chew' },
    { label: 'Terri', value: 'Terri Smith' }

  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.projectForm= this.fb.group({
      // import validator form @angular/forms
      projectId: ['',[Validators.required, Validators.minLength(5)]],
      description: ['My cool project', [Validators.required, Validators.maxLength(140)]],
      startDate: [new Date(), Validators.required],
      projectType: ['B'],
      selectedDevs: [[]],
      rating: [3]
      })
  }
  hasFormErrors() {
    return !this.projectForm.valid;
  }
// onSubmit event to see what values are submitted as json object
  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }

}
