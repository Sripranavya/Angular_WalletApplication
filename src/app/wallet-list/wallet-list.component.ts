import { Component,OnInit} from '@angular/core';
import { WalletDto } from '../model/wallet-dto';
import { WalletService } from '../service/wallet.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit{
  wallets:WalletDto[]=[];

 displayedColumns: string[] = ['WalletId','WalletName','WalletBalance'];
  constructor(private walletService:WalletService, private router:Router)
  {}
  
 ngOnInit(): void {
   this.getAllWallets();
}
  getAllWallets()
{
  this.walletService.getAllWallets().subscribe( 
    (resp: WalletDto[]) => {
      console.log(resp);
      this.wallets=resp;
    }, (error: HttpErrorResponse) => {
      console.log(error)
    }
  );
}
deleteWalletById(WalletId?:number){
  this.walletService.deleteWalletById(WalletId).subscribe(data=>{
    console.log(data);
    this.getAllWallets();
  })
}

updateWallet(wallet?: WalletDto){
  console.log("Update wal");
  console.log(wallet) ;

  this.router.navigate(['update',wallet?.WalletId]);
}
}

