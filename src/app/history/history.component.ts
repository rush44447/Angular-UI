import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  searchTermArray: string[] = []
  searchHistoryArray: any[] = []
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.searchTerm.subscribe(data => {
      this.searchTermArray.push(data);
    });
    this.apiService.searchHistory.subscribe(data => {
      if(data)
        this.searchHistoryArray = [...this.searchHistoryArray, data];
      else
        this.searchHistoryArray = [...this.searchHistoryArray, {}];
      console.log( this.searchHistoryArray)
    });
  }

  checkData(data: any ) {
    return Object.keys(data).length>0
  }
}
