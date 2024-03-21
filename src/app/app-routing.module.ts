import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/dashbord/home/home.component';
import { EmployeesComponent } from './component/dashbord/employees/employees.component';
import { CustomersComponent } from './component/dashbord/customers/customers.component';
import { TablesComponent } from './component/dashbord/tables/tables.component';
import { PlatComponent } from './component/dashbord/plat/plat.component';
import { StockComponent } from './component/dashbord/stock/stock.component';
import { CashierComponent } from './component/dashbord/cashier/cashier.component';
import { DashboardComponent } from './component/dashbord/dashboard/dashboard.component';
import { LogoutComponent } from './component/dashbord/logout/logout.component';

const routes: Routes = [
  {path:'dashbord',children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'customers',component:CustomersComponent},
    {path:'tables',component:TablesComponent},
    {path:'plat',component:PlatComponent},
    {path:'stock',component:StockComponent},
    {path:'cashier',component:CashierComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'logout',component:LogoutComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
