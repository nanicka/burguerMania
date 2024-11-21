import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cardapio', component: CardapioComponent}

];
