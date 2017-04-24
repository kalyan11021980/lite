import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import { ModelService } from './../services/services';

@Component({
	selector: 'home-view',
	templateUrl: './home.component.html',
  styleUrls:['./home.scss'],
  providers:[ModelService]
})
export class HomeView implements OnInit {
  public subs: Observable<string>;
  data: any[] = [];

  constructor(private http: TransferHttp, private srv: ModelService) {}

  ngOnInit() {
        // this.model.get('/api').subscribe(data => {
    //   this.data = data;
    // });

    this.srv.getDummyData().subscribe(data => {
      this.data = data;
    })
  }
}
