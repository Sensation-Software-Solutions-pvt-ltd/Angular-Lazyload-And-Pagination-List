import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
  }
  showHideMenu() {
    this._sharedService.showHideMenu();
  }
}
