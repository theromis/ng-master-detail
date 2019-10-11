import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() public title = 'No title';
  @Input() public subtitle = 'No subtitle';
  @Input() public description = 'No description';
  @Input() public isSelected = false;

  constructor() { }

  ngOnInit() {}

}
