import { Component, OnInit } from '@angular/core';
import { data } from '../../data/pagination-data';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  paginationData: any[] = [];
  paginationDataPageData = [...data.response]
  totalRecord = 100;
  filter: any = {};
  constructor() {
  }

  resetFilter() {
    this.filter = {
      pageSize: 10,
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
    this.paginationData = this.paginationDataPageData.slice(recordsToLeave, this.filter.pageSize + recordsToLeave);
  }
  pageSizeChange() {
    this.filter.pageNumber = 1;
    this.pageChange(this.filter.pageNumber);
  }



}
