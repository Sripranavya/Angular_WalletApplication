import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WalletDto } from '../model/wallet-dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient:HttpClient) { }

  userLogin(wallet:WalletDto):Observable<any>{
    return this.httpClient.post("http://localhost:8080/auth/login",wallet,{responseType:'json'});
  }
  userLogout(){

  }
  getUserInfo():Observable<any>{

    let jwt = sessionStorage.getItem("jwt");

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
   });
   return this.httpClient.get("http://localhost:8080/auth/userinfo", { headers: reqHeader })

  }
}
