import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'at-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.css']
})
export class FielderrorsComponent implements OnInit {

  // Add @Input emitter for input field components 
  @Input("form") form: FormGroup;
  @Input("field") fieldName: string;
  @Input("nicename") niceName: string;

  constructor() { }

  ngOnInit() {
  }
// fieldErros project form to check the validation  
//Adding this.form will work with any control 

  fieldErrors(field: string) {
    let controlState = this.form.controls[field];
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }
}
