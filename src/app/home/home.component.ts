import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  searchQuery: string = "";
  name = 'Angular';
  profile: any[] = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }


  search() {
    if(!this.searchQuery)this.profile = [];
    this.apiservice.searchTerm.next(this.searchQuery);
    this.apiservice.getProfile(this.searchQuery).subscribe((data: any)=>{
      if(data){
        this.profile = data['items'].slice(0,3);
        this.apiservice.searchHistory.next(data['items'][0]);
      }
    })
  }
}
