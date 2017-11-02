import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: any;
  constructor(public afDB: AngularFireDatabase) {
    this.getPedidos()
    .subscribe(
             pedids =>{this.pedidos = pedids}
            
     );
     console.log(this.pedidos);
   }

  ngOnInit() {
  }
  getPedidos(){
    //Retotnamos la lista de usuarios de firebase
    return this.afDB.list("pedidos",
        ref=>ref.orderByChild('estado').equalTo(1).limitToFirst(6)
    ).valueChanges(); 
  }
}
