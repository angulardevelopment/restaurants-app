import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRestaurantsList();
  }
  //Top Ramen Restaurant details-
  // res { "Brand": "MAMA", "Variety": "Instant Noodles Coconut Milk Flavour", "Style": "Pack", "Country": "Myanmar", "Stars": 5, "Top Ten": "2016 #10" }, {
  //   Utilise Response Parameters:
  //   [Brand, Variety, Style, Country, Stars, Top Ten].
  getRestaurantsList(){

    this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json').subscribe((res)=>{
      console.log(res, 'res');

    })

  }

}
