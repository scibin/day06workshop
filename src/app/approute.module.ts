import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './components/show.component';
import { CitylistComponent} from './components/citylist.component';

const ROUTES: Routes = [
    { path: '', component: CitylistComponent},
    { path: 'city', component: CitylistComponent },
    { path: 'city/:cityName', component: ShowComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }

// For debugging
// imports: [ RouterModule.forRoot(ROUTES, { enableTracing: true}) ],
