import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';

const routes: Routes =[
    { path: '', redirectTo: '/appComponent', pathMatch: 'full'},
    { path: 'appComponent', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
