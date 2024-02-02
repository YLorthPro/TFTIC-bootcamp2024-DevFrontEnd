import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './demo/home/home.component';
import { ContactComponent } from './demo/contact/contact.component';
import { BidingsComponent } from './demo/bidings/bidings.component';
import { DirectivesComponent } from './demo/directives/directives.component';
import { DemoServicesComponent } from './demo/demo-services/demo-services.component';
import { JustePrixComponent } from './demo/juste-prix/juste-prix.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'bindings', component: BidingsComponent},
  { path : 'directives', component: DirectivesComponent},
  { path : 'services', component: DemoServicesComponent},
  { path : 'juste-prix', component: JustePrixComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
