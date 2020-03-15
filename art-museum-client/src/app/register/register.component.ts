import { Collection } from './../collection';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  canRegister: boolean;
  registerForm: FormGroup;
  pwd2: string;
  user: User;
  userResult: User;
  
  formErrors = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    pwd2:''
  }
  validationMessage = {
    'firstName':{
      'required':'first name can not be empty',
      'minlength': 'first name should not be shorter than 4'
    },
    'lastName':{
      'required':'last name can not be empty'
    },
    'email':{
      'required':'email can not be empty',
      'emailRex':'enter email in format xxxxx@xxx.xxx(Only letters, numbers, underscores, periods, and dashes are allowed)'
    },
    'password':{
      'required':'password can not be empty',
      'minlength': 'password should not be shorter than 6'
    },
    'pwd2':{
      'required':'re-enter your password'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private location: Location,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.pwd2 = '';
    this.user = new User();
    this.user.password='';
    this.buildForm();
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.authService.register(this.user)
  //     .subscribe(() => this.goBack());
  // }

  add(): void {
    // firstname = firstname.trim();
    // lastname = lastname.trim();
    // email = email.trim();
    // password = password.trim();
    // password2 = password.trim();
    alert(this.user.email);
    this.authService.register(this.user)
    .subscribe( user => {
        if (typeof(user) === 'boolean') {
          this.router.navigate(['/register']);
          alert('this email has been used');
          this.user.password = '';
          this.user.email = '';
          this.user.firstName = '';
          this.user.lastName = '';
          this.pwd2 = '';
        } else {
          this.userResult = user;
          this.goBack();
        }
    });
  }

  buildForm():void {
    this.registerForm = this.fb.group({
      'firstName':['',[
        Validators.required,
        Validators.minLength(4)
      ]],
      'lastName':['',[
        Validators.required
      ]],
      'email':['',[
        Validators.required,
        this.validateRex('emailRex',/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
      ]],
      'password':['',[
        Validators.required,
        Validators.minLength(6)
      ]],
      'pwd2':['',[
        Validators.required
      ]]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged();
  }

  onValueChanged(data?:any){
    if(!this.registerForm) return;
    const form = this.registerForm;
    for(const field in this.formErrors){
      this.formErrors[field]='';
      const control = form.get(field);
      
      if(control&&control.dirty&&!control.valid){
        const messages = this.validationMessage[field];
        for(const key in control.errors){
          this.formErrors[field] += messages[key]+'\n';
        }
      }
    }
  }

  validateRex(type: string, validateRex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const str = control.value;
      const res = {};
      res[type] = {str}
      return validateRex.test(str) ? null : res;
    }
  }

}
