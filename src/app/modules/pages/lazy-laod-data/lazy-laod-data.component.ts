import { Component, OnInit } from '@angular/core';
import { data } from '../../data/lazy-load-data';

@Component({
  selector: 'app-lazy-laod-data',
  templateUrl: './lazy-laod-data.component.html',
  styleUrls: ['./lazy-laod-data.component.css']
})
export class LazyLaodDataComponent implements OnInit {
  throttle = 1000;
  scrollDistance = 1;
  scrollUpDistance = 2;

  paginationData: any[] = [];
  paginationDataPageData = [...data.response]
  totalRecord = 100;
  filter: any = {};
  constructor() {
  }

  resetFilter() {
    this.filter = {
      pageSize: 30,
      pageNumber: 1,
      searchaText: "",
    }
  }

  ngOnInit(): void {
    this.resetFilter();
    this.pageChange(1);
  }

  pageChange(pageNumber: number) {
    this.filter.pageNumber = pageNumber;
    let recordsToLeave = ((this.filter.pageNumber - 1) * this.filter.pageSize);
    let data = this.paginationDataPageData.slice(recordsToLeave, this.filter.pageSize + recordsToLeave);
    this.paginationData = [...data, ...this.paginationData];
  }
  onScrollDown(event: any) {
    this.filter.pageNumber = this.filter.pageNumber + 1;
    this.pageChange(this.filter.pageNumber)
  }

}
