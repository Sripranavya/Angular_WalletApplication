import { Component , OnInit} from '@angular/core';
import { WalletDto } from '../model/wallet-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from '../service/wallet.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  WalletId?:string|null="";

  wallet:WalletDto = new WalletDto();

  constructor(private router:Router,private walletService:WalletService,private activatedRoute:ActivatedRoute) {
  }
  ngOnInit():void {
      this.WalletId = this.activatedRoute.snapshot.paramMap.get("WalletId");
      console.log("updated id : " + this.WalletId);
 }

  onSubmit(wallet?: WalletDto){
    this.updateWallet();
  }
 updateWallet(){
    this.walletService.updateWallet(this.wallet)
      .subscribe(data=>{
        console.log(data);
        this.wallet = new WalletDto();
        this.getAllWallets();
      },error => console.log(error));
 }


  getAllWallets(){
    this.router.navigate(['/display']);
  }

}
