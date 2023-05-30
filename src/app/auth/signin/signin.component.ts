import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: string
  pword: string

  constructor(
    private router: Router,
    private service: AuthService) { }

  ngOnInit(): void {
  }

  onSignin() {
    this.service
      .signin(this.username, this.pword)
      .subscribe(response => {
        console.log(response)
        if (response['status']== 'succcess') {
        


          // cache the token
         // sessionStorage['token'] = response['data']['token']
          
          this.router.navigate(['/home'])
        } else {
         // alert(response['error'])
        // this.router.navigate(['/home'])
        }
      })
  }

}
