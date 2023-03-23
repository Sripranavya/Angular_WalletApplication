import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletDto } from '../model/wallet-dto';
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient:HttpClient) { }
  
  getWalletById(WalletId?:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/wallet/WalletId");
  }
  createWallet(newWallet:WalletDto):Observable<any>{
    let url:string = "http://localhost:8080/newWallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  deleteWalletById(WalletId?: number):Observable<Object>{
    return this.httpClient.delete("http://localhost:8080/wallet/WalletId"+WalletId);
  }
  updateWallet(wallet?:WalletDto):Observable<any>{
    return this.httpClient.put("http://localhost:8080/wallet",wallet);
  }
  getAllWallets():Observable<any>{
    return this.httpClient.get("http://localhost:8080/wallets");
  }
}
