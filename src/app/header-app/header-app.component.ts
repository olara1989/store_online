import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {
  showPedidos:boolean = true;
  showUsuarios:boolean = false;
  
  constructor() { 
 

  }
  ngOnInit() {
  }

}
