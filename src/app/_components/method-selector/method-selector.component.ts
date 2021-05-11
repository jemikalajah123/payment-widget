import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-method-selector',
  templateUrl: './method-selector.component.html',
  styleUrls: ['./method-selector.component.css']
})
export class MethodSelectorComponent implements OnInit {

  public amount: any;
  public payments: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.amount = this.route.snapshot.paramMap.get("amount");
    const code = this.route.snapshot.paramMap.get("amount");
    console.log(code);
    this.dataService.getPaymentMethod("NG").subscribe((data)=>{
      this.payments = data;
    });
  }

  public pay(){
    this.router.navigate(['/pay', {amount: this.amount}]);
  }
}
