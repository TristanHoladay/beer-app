import { Component, OnInit } from '@angular/core';
import { IBeer } from '../interfaces/ibeer';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beerList: IBeer[] = [];
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed'];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getAll()
    .subscribe(data => (this.beerList = data));
  }

}
