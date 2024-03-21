
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatPaginator,MatPaginatorModule  } from '@angular/material/paginator';
import { MatSort,MatSortModule } from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';

export interface Plat {
  id: string;
  name: string;
  price: number;
}

const ID: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
];


const NAME: string[] = [
  'pizza neptune',
  'hamburger',
  'escalope panne',
  'soupe',
  'makloub',
];


const PRICE: number[] = [
  10,
  60,
  30,
  100,
  50,
];

@Component({
  selector: 'app-visualisation-plat',
  templateUrl: './visualisation-plat.component.html',
  styleUrls: ['./visualisation-plat.component.css'],
})
export class VisualisationPlatComponent implements AfterViewInit{
  @Input() input: any;
  displayedColumns: string[] = ['id', 'name', 'price','action'];
  dataSource: MatTableDataSource<Plat>;

  constructor() {
    const data: Plat[] = [];
    for (let i = 0; i < ID.length; i++) {
      data.push({ id: ID[i], name: NAME[i], price: PRICE[i] });
    }
    this.dataSource = new MatTableDataSource(data);
  }


  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}


