import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  private _opened: boolean = true;
  private _mode: string = 'slide';
  constructor() { }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit() {
  }

}
