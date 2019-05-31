import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.sass']
})
export class SalaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className = 'content2';
    $(() => {
      $('#example1').DataTable()
      $('#example2').DataTable({
        'paging'      : true,
        'lengthChange': false,
        'searching'   : false,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : false
      })
    })
  }

}
