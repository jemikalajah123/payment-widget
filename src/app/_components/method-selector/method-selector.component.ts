import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-method-selector',
  templateUrl: './method-selector.component.html',
  styleUrls: ['./method-selector.component.css']
})
export class MethodSelectorComponent implements OnInit {

  public payments: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    const routeData = this.route.snapshot.queryParams.res.toString();
    console.log(routeData);
    this.dataService.getPaymentMethod(routeData.code).subscribe((data)=>{
      this.payments = data;
    });
  }

  public pay(){
    this.router.navigate(['/pay']);
  }
}
