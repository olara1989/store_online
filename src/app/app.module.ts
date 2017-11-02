import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//Agregamos modulo de formulario

import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VentasComponent } from './ventas/ventas.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
//imports Angular
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import Routes para las rutas
import {Routes,RouterModule} from '@Angular/router';
// config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyClxfv-DADQCx_p6Zk8P3uo3klQ3_TexVw",
  authDomain: "agenda-4f0ff.firebaseapp.com",
  databaseURL: "https://agenda-4f0ff.firebaseio.com", 
  projectId: "agenda-4f0ff",  
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: "739716695668"
};
const appRoutes:Routes = [
  {path:'',component:PedidosComponent},
   {path:'usuarios',component:UsuariosComponent},
   {path:'pedidos',component:PedidosComponent},
   {path:'productos',component:ProductosComponent},
   {path:'clientes',component:ClientesComponent},
   {path:'categorias',component:CategoriasComponent},
   {path:'ventas',component:VentasComponent},
   {path:'movimientos',component:MovimientosComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    PedidosComponent,
    UsuariosComponent,
    FooterComponent,
    ProductosComponent,
    CategoriasComponent,
    ClientesComponent,
    VentasComponent,
    MovimientosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
