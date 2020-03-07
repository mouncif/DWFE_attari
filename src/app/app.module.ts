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
import { UserService } from './_services/user.service';
import { ProduitService } from './_services/produit.service';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ProduitNavComponent } from './components/produit/produit-nav/produit-nav.component';
import { UserNavComponent } from './components/user/user-nav/user-nav.component';
import { ListFournisseurComponent } from './components/fournisseur/list-fournisseur/list-fournisseur.component';
import { FournisseurFormComponent } from './components/fournisseur/fournisseur-form/fournisseur-form.component';
import { FournisseurNavComponent } from './components/fournisseur/fournisseur-nav/fournisseur-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopBarComponent,
    ContentComponent,
    ListProduitComponent,
    ProduitFormComponent,
    ListUsersComponent,
    UserFormComponent,
    ProduitNavComponent,
    UserNavComponent,
    ListFournisseurComponent,
    FournisseurFormComponent,
    FournisseurNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
