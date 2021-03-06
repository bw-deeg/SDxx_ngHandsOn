import { PokemonService } from './services/pokemon.service';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HrComponent } from './components/hr/hr.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeTypePipe } from './pipes/poke-type.pipe';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ProductListComponent,
    HrComponent,
    AccordionComponent,
    PokeListComponent,
    PokeTypePipe,
    HomeComponent,
    AboutComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
