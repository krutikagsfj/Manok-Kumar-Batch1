import { Component } from '@angular/core';
import { MobileServiceService } from './mobile-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobileProject';

  constructor (private httpService: MobileServiceService) { }

  arr = [];

  mobile;

  deleteItem(item)
  {
    let i=this.mobile.indexOf(item);
    this.mobile.splice(i,1);
  }

  ngOnInit () {
    this.httpService.getProducts().subscribe(
      data => {
        this.mobile = data;
      })
  }

  mobileSort;
  sortbyid()
  {
    this.mobileSort="mobId";
  }
  sortbyname()
  {
    this.mobileSort="mobName";
  }
  sortbyprice()
  {
    this.mobileSort="mobPrice";
  }
}
