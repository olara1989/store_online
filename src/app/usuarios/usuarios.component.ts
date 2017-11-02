import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var $:any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  titleModel = "Nuevo usuario";
  model:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  model2:any = {id:null,nombre:null,app:null,apm:null,direccion:null,tel:null,mail:null,rol:null};
  myValue = -1;
  myValueUpdate = -1;

 // usuarios=[
   // {nombre:"Omar",app:"Lara",apm:"Juárez",direccion:"La victoria",tel:"4961135581",mail:"",rol:1},
    //{nombre:"Rocko",app:"Lara",apm:"Chávez",direccion:"Pinos Zac",tel:"4961135581",mail:"",rol:2},
    //{nombre:"J",app:"Lara",apm:"dohe",direccion:"La victoria",tel:"4961135581",mail:"olara@utzac.edu",rol:2}
  //];
  usuarios: any;
  
  constructor(public afDB: AngularFireDatabase) {
   //Promesa para llamar de forma asincrona la lista de usuarios
    this.model.rol = 1;
    this.getUsuarios()
      .subscribe(
               users =>{this.usuarios = users}
    );
   }
  ngOnInit() {
  }
  /*
    Metodos crud
  */
  getUsuarios(){
    //Retotnamos la lista de usuarios de firebase
    return this.afDB.list("usuarios").valueChanges(); ;
  }
  addUsuario():void{
    this.model.id = Date.now();
    this.afDB.database.ref('usuarios/' + this.model.id).set(
      this.model
    );
   /* this.usuarios.push(this.model);*/
    this.model={};
    $("#newUser").modal("hide");
    this.model.rol = 1;
 }

 deleteUsuario(i):void{
    /* this.usuarios.splice(i,1);*/
    console.log(i);
    this.afDB.database.ref('usuarios/' + i).remove();
     $("#delUser").modal("hide");
     this.myValue = 1;
 }

 editUsuario(i,index):void{
 
 
       this.model2 =  this.usuarios[index];
       this.myValue = i;
  console.log(this.myValue);
 }

 updateUsuario():void{
  console.log(this.myValue);
  this.afDB.database.ref('usuarios/' + this.myValue).set(
    this.model2
  ); 
  this.model2={};
  $("#uppdateUser").modal("hide");
  this.model.rol = 1;
 }

}
