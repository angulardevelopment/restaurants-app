import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRamensList();
  }

    // use random images from this API for the noodle images for Cards
  // res { "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg" },

  getRamensList(){

    this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json').subscribe((res)=>{
      console.log(res, 'res');

    })

  }

}
