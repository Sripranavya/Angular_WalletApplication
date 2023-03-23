import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { WalletDto } from '../model/wallet-dto';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  wallet: WalletDto = { emailId: "", password: "" };

  constructor(private router: Router, private authService: AuthService) { }

  displayUserForm() {
    console.log("displayUserForm()");
    console.log(this.wallet);
  }

  submitLoginForm() {
    console.log("submitLoginForm()");

    console.log(this.wallet);

    this.authService.userLogin(this.wallet).subscribe(
      {
        next:(data)=>{
          console.log(data);
          sessionStorage.setItem("user",JSON.stringify(data));
          console.log(data.jwt);
          sessionStorage.setItem("jwt",data.jwt);
          sessionStorage.setItem("role",data.role);
          
          //localStorage
          this.router.navigateByUrl("home");
        },
        error:(err)=>{
          console.log(err);
        }
      }
    );
    

  }
}
