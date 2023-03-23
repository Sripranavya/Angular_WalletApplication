import { Component, OnInit} from '@angular/core';
import { WalletDto } from '../model/wallet-dto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  wallet:WalletDto= new WalletDto();

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.wallet= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }


}
