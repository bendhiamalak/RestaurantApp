import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishListComponent } from './dish-list/dish-list.component';

const routes: Routes = [
  {path:'addPlat', component:AddPlatComponent},
  {path:'addDish', component:AddDishComponent},
  {path:'dishList', component:DishListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
