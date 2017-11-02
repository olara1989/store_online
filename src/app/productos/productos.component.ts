import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var $:any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  titleModel = "Nuevo producto";
  model:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  model2:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  myValue = -1;
  myValueUpdate = -1;

 // productos=[
   // {nombre:"Omar",app:"Lara",apm:"Juárez",direccion:"La victoria",tel:"4961135581",mail:"",rol:1},
    //{nombre:"Rocko",app:"Lara",apm:"Chávez",direccion:"Pinos Zac",tel:"4961135581",mail:"",rol:2},
    //{nombre:"J",app:"Lara",apm:"dohe",direccion:"La victoria",tel:"4961135581",mail:"olara@utzac.edu",rol:2}
  //];
  productos: any;
  
  constructor(public afDB: AngularFireDatabase) {
   //Promesa para llamar de forma asincrona la lista de productos
    this.model.rol = 1;
    this.getProductos()
      .subscribe(
               users =>{this.productos = users}
    );
   }
  ngOnInit() {
  }
  /*
    Metodos crud
  */
  getProductos(){
    //Retotnamos la lista de productos de firebase
    return this.afDB.list("productos").valueChanges(); ;
  }
  addProducto():void{
    this.model.id = Date.now();
    this.afDB.database.ref('productos/' + this.model.id).set(
      this.model
    );
   /* this.productos.push(this.model);*/
    this.model={};
    $("#newUser").modal("hide");
    this.model.rol = 1;
 }

 deleteProducto(i):void{
    /* this.productos.splice(i,1);*/
    console.log(i);
    this.afDB.database.ref('productos/' + i).remove();
     $("#delUser").modal("hide");
     this.myValue = 1;
 }

 editProducto(i,index):void{
 
 
       this.model2 =  this.productos[index];
       this.myValue = i;
  console.log(this.myValue);
 }

 updateProducto():void{
  console.log(this.myValue);
  this.afDB.database.ref('productos/' + this.myValue).set(
    this.model2
  ); 
  this.model2={};
  $("#uppdateUser").modal("hide");
  this.model.rol = 1;
 }

}
