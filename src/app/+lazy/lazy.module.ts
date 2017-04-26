import {NgModule, Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import {RouterModule} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ModelService } from './../services/services';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
	selector: 'lazy-view',
	template: `<h3>i'm lazy {{ test }}</h3>`,
  providers:[ModelService]
})
export class LazyView implements OnInit {
	test: any = {};


  constructor(private srv: ModelService, @Inject(PLATFORM_ID) private platformId: Object) {
		// if (isPlatformBrowser(this.platformId)) {
			// console.log('Browser')

  //  }
	}

  ngOnInit() {
        // this.model.get('/api').subscribe(data => {
    //   this.data = data;
    // });

		this.srv.postDummyData().subscribe(data => {
			this.test = data.id;
			console.log(this.test);
		})




  }
}

@NgModule({
	declarations: [LazyView],
	imports: [
		RouterModule.forChild([
			{ path: '', component: LazyView, pathMatch: 'full'}
		])
	],
	providers:[ModelService]
})
export class LazyModule {
}
