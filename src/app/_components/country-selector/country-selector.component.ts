import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Router } from '@angular/router';
import { Pay } from '../../_models/pay';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {
    
  public countries: any;
  public pay: Pay = { amount: null, code : null};
      
  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() {
    this.dataService.getCountries().subscribe((data)=>{
      this.pay.code = data['code'];
      this.countries = data;
    });
  }

  public next(f: any){
    this.router.navigate(['/payment-method', {amount: f.value.amount, code: f.value.code}]);
  }

}
