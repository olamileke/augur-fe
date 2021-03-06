import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LoadService } from '../../services/load.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() authType;
  signupForm:FormGroup;
  loginForm:FormGroup;
  isLoading:Subject<boolean> = this.load.isLoading;

  constructor(private fb:FormBuilder, private auth:AuthService,
              private load:LoadService, private router:Router, private notification:NotificationService) { }

  ngOnInit() {

  	this.signupForm = this.fb.group({
  		name:['', [Validators.required, Validators.minLength(7)]],
        email:['', [Validators.required, Validators.minLength(10)]],
        password:['', [Validators.required, Validators.minLength(8)]]
  	})

    this.loginForm = this.fb.group({
        email:['jjackson@yahoo.com', [Validators.required, Validators.minLength(10)]],
        password:['12345678', [Validators.required, Validators.minLength(8)]]
    })

  }


  signup(form:FormGroup) {

      this.auth.signup(form.value).subscribe((res:any) => {

         this.notification.showSuccessMsg(`Activate your account @${form.get('email').value}`);
      })
  }


  login(form:FormGroup) {

      this.auth.login(form.value).subscribe((res:any) => {

          localStorage.augur_user=JSON.stringify(res.user);
          this.router.navigate(['/dashboard']);
          this.notification.showSuccessMsg('Login successful');
      })
  }
}
