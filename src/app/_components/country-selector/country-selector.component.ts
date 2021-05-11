import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {
    
  public countries: any;
      
  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() {
    this.dataService.getCountries().subscribe((data)=>{
      this.countries = data;
    });
  }

  public next(){
    console.log(this.countries);
    this.router.navigate(['/payment-method'], { queryParams: {res: this.countries}});
  }

}
