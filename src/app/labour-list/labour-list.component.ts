import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-labour-list',
  templateUrl: './labour-list.component.html',
  styleUrls: ['./labour-list.component.sass']
})
export class LabourListComponent implements OnInit {

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
