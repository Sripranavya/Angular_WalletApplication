import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent {
  name?:string|null="";

  constructor(private route:ActivatedRoute){}
  
    ngOnInit(): void {
  
      this.name=this.route.snapshot.paramMap.get("name");
      
      
  
    }
}
