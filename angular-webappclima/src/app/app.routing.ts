import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { PagHomeComponent } from "./pag-home/pag-home.component"
import { PagLocalidadeComponent } from "./pag-localidade/pag-localidade.component";

const APP_ROUTES: Routes = [
    //Roteia  localhost:port/'' para Component PagHomeComponet
    {path: '', component: PagHomeComponent},
    {path: 'location/:nomecidade', component: PagLocalidadeComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);