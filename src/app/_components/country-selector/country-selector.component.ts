import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';


@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {
    
  public countries: any;
      
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries = data;
    });
  }

}
