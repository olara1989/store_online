import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var $:any;
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  titleModel = "Nuevo categoria";
  model:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  model2:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  myValue = -1;
  myValueUpdate = -1;

 // categorias=[
   // {nombre:"Omar",app:"Lara",apm:"Juárez",direccion:"La victoria",tel:"4961135581",mail:"",rol:1},
    //{nombre:"Rocko",app:"Lara",apm:"Chávez",direccion:"Pinos Zac",tel:"4961135581",mail:"",rol:2},
    //{nombre:"J",app:"Lara",apm:"dohe",direccion:"La victoria",tel:"4961135581",mail:"olara@utzac.edu",rol:2}
  //];
  categorias: any;
  
  constructor(public afDB: AngularFireDatabase) {
   //Promesa para llamar de forma asincrona la lista de categorias
    this.model.rol = 1;
    this.getCategorias()
      .subscribe(
               users =>{this.categorias = users}
    );
   }
  ngOnInit() {
  }
  /*
    Metodos crud
  */
  getCategorias(){
    //Retotnamos la lista de categorias de firebase
    return this.afDB.list("categorias").valueChanges(); ;
  }
  addCategoria():void{
    this.model.id = Date.now();
    this.afDB.database.ref('categorias/' + this.model.id).set(
      this.model
    );
   /* this.categorias.push(this.model);*/
    this.model={};
    $("#newUser").modal("hide");
    this.model.rol = 1;
 }

 deleteCategoria(i):void{
    /* this.categorias.splice(i,1);*/
    console.log(i);
    this.afDB.database.ref('categorias/' + i).remove();
     $("#delUser").modal("hide");
     this.myValue = 1;
 }

 editCategoria(i,index):void{
 
 
       this.model2 =  this.categorias[index];
       this.myValue = i;
  console.log(this.myValue);
 }

 updateCategoria():void{
  console.log(this.myValue);
  this.afDB.database.ref('categorias/' + this.myValue).set(
    this.model2
  ); 
  this.model2={};
  $("#uppdateUser").modal("hide");
  this.model.rol = 1;
 }

}
