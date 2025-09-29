import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/user-storage.service';



@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
    private authService : AuthService,
    private message : NzMessageService,
    private route : Router
  ){}

  validationForm! : FormGroup;

  ngOnInit(){
    this.validationForm =this.fb.group({
      email :[null,[Validators.required]],
      password :[null,[Validators.required]]
    })
  }

  submitForm(){
    this.authService.login(this.validationForm.value).subscribe(res=>{
      this.message
      .success(
        `login Successful`,
        {nzDuration : 5000}
      );
      const user ={
        id: res.id,
        role: res.role
      }
      UserStorageService.saveUser(user);
      if(UserStorageService.isAdminLoggedIn()){
        this.route.navigateByUrl('admin/dashboard')
      }else if(UserStorageService.isUserLoggedIn()){
        this.route.navigateByUrl('user/dashboard')
      }
      console.log(res);
    },error=>{
      this.message
      .error(
        `Bad credentials`,
        {nzDuration : 5000}
      );
    })
  }
}
