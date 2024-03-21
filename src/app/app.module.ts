import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { HomeComponent } from './component/dashbord/home/home.component';
import { EmployeesComponent } from './component/dashbord/employees/employees.component';
import { CustomersComponent } from './component/dashbord/customers/customers.component';
import { TablesComponent } from './component/dashbord/tables/tables.component';
import { PlatComponent } from './component/dashbord/plat/plat.component';
import { StockComponent } from './component/dashbord/stock/stock.component';
import { CashierComponent } from './component/dashbord/cashier/cashier.component';
import { SidebarComponent } from './component/dashbord/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './component/dashbord/dashboard/dashboard.component';
import { LogoutComponent } from './component/dashbord/logout/logout.component';
import { VisualisationPlatComponent } from './component/visualisation-plat/visualisation-plat.component';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeesComponent,
        CustomersComponent,
        TablesComponent,
        PlatComponent,
        StockComponent,
        CashierComponent,
        SidebarComponent,
        DashboardComponent,
        LogoutComponent,
        VisualisationPlatComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AppModule { }
