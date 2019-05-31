import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-work-process-list',
  templateUrl: './work-process-list.component.html',
  styleUrls: ['./work-process-list.component.sass']
})
export class WorkProcessListComponent implements OnInit {

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
