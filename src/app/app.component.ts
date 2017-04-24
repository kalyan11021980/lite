import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';
import {ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'sl-app',
	templateUrl: './app.component.html',
  styleUrls: ['./../assets/styles/main.scss','./app.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) {}
  ngOnInit() {
    this.cache.set('cached', true);
  }
}
