import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, HostListener } from '@angular/core';
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

  @Input()
  BeerService:Observable<any>;
  beerList;
  beerListData;

  @Output()
  public action = new EventEmitter<boolean>();

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    console.log('ListComponent: ngOnInit');
    this.beerService.getBeerList().subscribe(data => {
      console.log('ListComponent: subscribe of getBeerList()', data);
      this.beerListData = data;
    });
  }

  onGiveMeABeer(){
    this.beerList = this.beerListData;
    this.action.emit(true);
  }

}
