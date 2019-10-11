import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../../services';

@Component({
  selector: 'lib-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  private isOutletActive = false;

  constructor(public breakpoints: BreakpointService) { }

  ngOnInit() { }

  onOutletActivated($event) {
    this.isOutletActive = true;
  }

  onOutletDeactivated($event) {
    this.isOutletActive = false;
  }

}
