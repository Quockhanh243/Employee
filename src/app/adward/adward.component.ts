import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-adward',
  templateUrl: './adward.component.html',
  styleUrls: ['./adward.component.sass']
})
export class AdwardComponent implements OnInit {

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
