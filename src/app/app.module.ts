import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';
import { ProduitFormComponent } from './components/produit/produit-form/produit-form.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopBarComponent,
    ContentComponent,
    ListProduitComponent,
    ProduitFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
