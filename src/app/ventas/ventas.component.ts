import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var $:any;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  titleModel = "Nuevo venta";
  model:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  model2:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  myValue = -1;
  myValueUpdate = -1;

 // ventas=[
   // {nombre:"Omar",app:"Lara",apm:"Juárez",direccion:"La victoria",tel:"4961135581",mail:"",rol:1},
    //{nombre:"Rocko",app:"Lara",apm:"Chávez",direccion:"Pinos Zac",tel:"4961135581",mail:"",rol:2},
    //{nombre:"J",app:"Lara",apm:"dohe",direccion:"La victoria",tel:"4961135581",mail:"olara@utzac.edu",rol:2}
  //];
  ventas: any;
  
  constructor(public afDB: AngularFireDatabase) {
   //Promesa para llamar de forma asincrona la lista de ventas
    this.model.rol = 1;
    this.getVentas()
      .subscribe(
               users =>{this.ventas = users}
    );
   }
  ngOnInit() {
  }
  /*
    Metodos crud
  */
  getVentas(){
    //Retotnamos la lista de ventas de firebase
    return this.afDB.list("ventas").valueChanges(); ;
  }
  addVenta():void{
    this.model.id = Date.now();
    this.afDB.database.ref('ventas/' + this.model.id).set(
      this.model
    );
   /* this.ventas.push(this.model);*/
    this.model={};
    $("#newUser").modal("hide");
    this.model.rol = 1;
 }

 deleteVenta(i):void{
    /* this.ventas.splice(i,1);*/
    console.log(i);
    this.afDB.database.ref('ventas/' + i).remove();
     $("#delUser").modal("hide");
     this.myValue = 1;
 }

 editVenta(i,index):void{
 
 
       this.model2 =  this.ventas[index];
       this.myValue = i;
  console.log(this.myValue);
 }

 updateVenta():void{
  console.log(this.myValue);
  this.afDB.database.ref('ventas/' + this.myValue).set(
    this.model2
  ); 
  this.model2={};
  $("#uppdateUser").modal("hide");
  this.model.rol = 1;
 }

}
