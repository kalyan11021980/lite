import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

// domain/feature service
@Injectable()
export class ModelService {
   // This is only one example of one Model depending on your domain
  constructor(private _http: TransferHttp) {

  }

  getDummyData(){
        return this._http.get('http://localhost:8000/api').map(res => {
            return res;
        })
  }

  postDummyData(){
        return this._http.get('http://localhost:8000/postapi').map(res => {
          // console.log(res);
            return res;
        })
  }

}
