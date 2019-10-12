import { Component, OnInit, Input } from '@angular/core';
import { BreakpointService } from '@lib/master-detail';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'No Title';
  @Input() showBack = false;
  @Input() backRoute = '../../';

  constructor(public breakpointService: BreakpointService) { }

  ngOnInit() { }

}
