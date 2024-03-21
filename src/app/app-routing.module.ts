import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { AddDishComponent } from './add-dish/add-dish.component';

const routes: Routes = [
  {path:'addPlat', component:AddPlatComponent},
  {path:'addDish', component:AddDishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
