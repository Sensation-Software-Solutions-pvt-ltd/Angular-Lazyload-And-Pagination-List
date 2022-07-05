import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isShowMenu = false;
  constructor(private _sharedService: SharedService) {
    this._sharedService.showHideMenuSubject$.subscribe(res => {
      this.isShowMenu=(!this.isShowMenu);
      console.log(this.isShowMenu);

    })

  }

  ngOnInit(): void {

  }

}
