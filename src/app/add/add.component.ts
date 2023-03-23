import { Component ,OnInit} from '@angular/core';
import { WalletDto } from '../model/wallet-dto';
import { WalletService } from '../service/wallet.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newWallet: WalletDto = new WalletDto();

  constructor(private walletService : WalletService ,
              private router : Router, private httpClient :HttpClient) { }

  ngOnInit(): void{
   
    }
    onSubmit(){
      console.log(this.newWallet);
      this.saveWallet();
    }
  

   saveWallet(){
    this.walletService.createWallet(this.newWallet).subscribe(data => {
      console.log(data);
      this.goToWalletList();
      
    },error => console.log(error));
    
}

  goToWalletList(){
    this.router.navigate(['/display']);
  }
  

}
