import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() rating: number=4;
  cropWidth: number = 100;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.cropWidth=this.rating * 100/5;
  }

}
