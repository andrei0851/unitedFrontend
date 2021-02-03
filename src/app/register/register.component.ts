import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {AccountService} from '../services/account.service';
import {Router} from '@angular/router';

export class RegisterData {
  UserName: string;
  email: string;
  password: string;
  gender: string;

  constructor(
    UserName: string,
    email: string,
    password: string,
    gender: string
  ) {
    this.UserName = UserName;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submittedPressed = false;
  success = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      UserName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: [null, [Validators.required, Validators.minLength(8)]],
          confPassword: [null, [Validators.required]],
        },
        { validators: this.confPasswordMatchesValidator() }
      ),
      gender: [null, [Validators.required]],
    });

    // this.firstName.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  confPasswordMatchesValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.get('password').value !== control.get('confPassword').value
        ? { confPass: true }
        : null;
    };
  }

  submit(): void {
    this.submittedPressed = true;
    if (this.registerForm.invalid) {
      return;
    }

    const registerData1: RegisterData = new RegisterData(
      this.UserName.value,
      this.email.value,
      this.password.value,
      this.gender.value
    );
    // const registerData2: RegisterData = new RegisterData(
    //  this.registerForm.value.firstName,
    //   this.registerForm.value.lastName,
    //   this.registerForm.value.email,
    //   this.registerForm.value.passwords.password,
    //   this.registerForm.value.gender,
    // );
    // console.log(registerData2);

    this.accountService.register(registerData1).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status) { this.success = true; }
        else { this.errorMessage = response.message; }
        },
      () => {
        console.log(error);
      }
    );
    console.log(registerData1);
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

  get UserName(): AbstractControl {
    return this.registerForm.get('UserName');
  }


  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get passwords(): AbstractControl {
    return this.registerForm.get('passwords');
  }

  get password(): AbstractControl {
    return this.registerForm.get('passwords').get('password');
  }

  get confPassword(): AbstractControl {
    return this.registerForm.get('passwords').get('confPassword');
  }

  get gender(): AbstractControl {
    return this.registerForm.get('gender');
  }
}
