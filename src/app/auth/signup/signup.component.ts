import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: any
      lastname:any
      DOB: any
      address: any
      pcode:any
      phone: any
      username: any
      pword: any

  constructor(
    private router: Router,
    private service: AuthService) { }

  ngOnInit(): void {
  }

  onSignup() {
    var flag= true;
    var firstname = this.firstname;
    var lastname = this.lastname;
    var phone  = this.phone;
    var password = this.pword;
    var regPhone=/^\d{10}$/;                       
    //var regName = /\d+$/g;
    var regName = /^[A-Za-z]*$/;
    var regpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/;

  if (password == "" || !regpass.test(password))
  { flag=false;
    window.alert("Enter Valid Password");
  }
if (firstname == "" || !regName.test(firstname)) {flag=false;
      window.alert("Please enter your firstname properly.");
    }
if (lastname == "" || !regName.test(lastname)) {flag=false;
      window.alert("Please enter your lastname properly.");
    }
if (phone == "" || !regPhone.test(phone)) {flag=false;
      window.alert("Please enter valid phone number.");
    }
   if (flag){

 
    this.service
      .signup(this.firstname, this.lastname, this.DOB, this.address,this.pcode,this.phone,this.username, this.pword)
      .subscribe(response => {
        
        console.log(response['status']);
        if (response['status'] == "succcess") {
          
          window.alert("Succesully Signup");
          this.router.navigate(['/auth/signin']);
      
          
        }
      
      })
  }

}
}