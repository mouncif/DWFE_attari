import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Periodic } from '../periodic';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  constructor(private elementService:ElementService) { }

  ngOnInit() {
    this.fetchElements();
  }
  
  listData = new MatTableDataSource<Periodic>();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  fetchElements()
  {
    this.elementService.getAll().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = new MatTableDataSource(res as any);
      }
    )
  }

}
