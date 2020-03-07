import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';
import { ProduitFormComponent } from './components/produit/produit-form/produit-form.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';

const routes: Routes =[
    { path: '', redirectTo: '/produits', pathMatch: 'full'},
    { path: 'produits', component: ListProduitComponent },
    { path: 'produit-form', component: ProduitFormComponent },
    { path: 'users', component: ListUsersComponent },
    { path: 'user-form', component: UserFormComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}