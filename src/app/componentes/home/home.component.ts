import { HomeService } from './home.service';
import { IItem } from './../../item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listItems: IItem[] = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.listItems().subscribe((listItem)=>{
      this.listItems = listItem
    })
  }
}
