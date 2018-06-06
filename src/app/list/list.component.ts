import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { BeerService } from './beer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [BeerService],
  encapsulation: ViewEncapsulation.Native,
})
export class ListComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  public action = new EventEmitter<boolean>();

  beerList;

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    console.log('ListComponent: ngOnInit');
    this.beerService.getBeerList().subscribe(data => {
      console.log('ListComponent: subscribe of getBeerList()', data);
      this.beerList = data;
    });
  }

  onGiveMeABeer(){
    this.action.emit(true);
  }

}
