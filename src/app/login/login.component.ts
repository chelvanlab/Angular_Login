import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { FormGroup,NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    console.log(form.value.username);
    this.http.get('http://localhost:4000/login?email=' + form.value.username + '&password=' + form.value.password)
      .subscribe(Response => {
        console.log(Response);
        if(Response.msg=="Sucessfull"){
          this.router.navigate(['/profile'])
          
        }
        if(Response.msg=="Incorrect"){
          alert("Invalid");
        }
        if(Response.msg=="Not valid"){
          alert("Please enter email and password field");
        }

      });
    
  }

  

}