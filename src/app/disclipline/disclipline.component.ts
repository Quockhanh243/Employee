import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-disclipline',
  templateUrl: './disclipline.component.html',
  styleUrls: ['./disclipline.component.sass']
})
export class DiscliplineComponent implements OnInit {

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
