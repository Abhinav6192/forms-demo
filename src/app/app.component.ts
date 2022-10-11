import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signUpFormReact!: FormGroup;
  showFormData: boolean = false;
  displayingData: any = {};
  showReactiveForm: boolean = true;
  name: string = '';
  occupation: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpFormReact = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), this.noWhiteSpace()]],
      occupation: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  showData() {
    console.log(this.signUpFormReact.value);
    this.displayingData = this.signUpFormReact.value;
    this.showFormData = true;
  }
  showTemplateData() {
    this.showFormData = true;
  }

  noWhiteSpace(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: 'value is only whitespace' };
    }
  }
}
