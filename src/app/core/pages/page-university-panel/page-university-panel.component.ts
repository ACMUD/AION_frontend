import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'aion-university-panel',
  templateUrl: './page-university-panel.component.html',
  styleUrls: ['./page-university-panel.component.scss'],
  providers: [
    SelectorService
  ],
})

export class PageUniversityPanelComponent implements OnInit {

  uId: string = '';

  constructor(
      private selectorService: SelectorService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  redirectToNotFound () {
    this.router.navigate(['U-UnfoUnd']);
  }

  ngOnInit () {
    const uId = this.route.snapshot.paramMap.get('id');
    if ( !uId ){
      this.redirectToNotFound();
      return;
    }
    this.uId = uId;
    try{
      this.selectorService
        .getDiminutivo(this.uId)
        .subscribe(
          ( diminu: String ) => {
            if (diminu != this.uId) {
              this.redirectToNotFound();
            }
          },error => {
            this.redirectToNotFound();
          }
        );
    } catch ( error ) {
        this.redirectToNotFound();
    }
  }

}