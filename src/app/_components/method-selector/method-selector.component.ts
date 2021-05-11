import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-method-selector',
  templateUrl: './method-selector.component.html',
  styleUrls: ['./method-selector.component.css']
})
export class MethodSelectorComponent implements OnInit {

  public payments: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getPaymentMethod().subscribe((data)=>{
      console.log(data);
      this.payments = data;
    });
  }
}
