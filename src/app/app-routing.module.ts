import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';

const routes: Routes =[
    { path: '', redirectTo: '/produits', pathMatch: 'full'},
    { path: 'produits', component: ListProduitComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}