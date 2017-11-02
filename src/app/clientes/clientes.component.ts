import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var $:any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  titleModel = "Nuevo cliente";
  model:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  model2:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  myValue = -1;
  myValueUpdate = -1;

 // clientes=[
   // {nombre:"Omar",app:"Lara",apm:"Juárez",direccion:"La victoria",tel:"4961135581",mail:"",rol:1},
    //{nombre:"Rocko",app:"Lara",apm:"Chávez",direccion:"Pinos Zac",tel:"4961135581",mail:"",rol:2},
    //{nombre:"J",app:"Lara",apm:"dohe",direccion:"La victoria",tel:"4961135581",mail:"olara@utzac.edu",rol:2}
  //];
  clientes: any;
  
  constructor(public afDB: AngularFireDatabase) {
   //Promesa para llamar de forma asincrona la lista de clientes
    this.model.rol = 1;
    this.getClientes()
      .subscribe(
               users =>{this.clientes = users}
    );
   }
  ngOnInit() {
  }
  /*
    Metodos crud
  */
  getClientes(){
    //Retotnamos la lista de clientes de firebase
    return this.afDB.list("clientes").valueChanges(); ;
  }
  addCliente():void{
    this.model.id = Date.now();
    this.afDB.database.ref('clientes/' + this.model.id).set(
      this.model
    );
   /* this.clientes.push(this.model);*/
    this.model={};
    $("#newUser").modal("hide");
    this.model.rol = 1;
 }

 deleteCliente(i):void{
    /* this.clientes.splice(i,1);*/
    console.log(i);
    this.afDB.database.ref('clientes/' + i).remove();
     $("#delUser").modal("hide");
     this.myValue = 1;
 }

 editCliente(i,index):void{
 
 
       this.model2 =  this.clientes[index];
       this.myValue = i;
  console.log(this.myValue);
 }

 updateCliente():void{
  console.log(this.myValue);
  this.afDB.database.ref('clientes/' + this.myValue).set(
    this.model2
  ); 
  this.model2={};
  $("#uppdateUser").modal("hide");
  this.model.rol = 1;
 }

}
