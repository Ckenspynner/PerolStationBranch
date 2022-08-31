import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import * as momentNs from 'moment';
import { DateTime as LuxonDateTime, Duration as LuxonDuration } from 'luxon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInSectionComponent } from './sign-in-section/sign-in-section.component';
import { SignUpSectionComponent } from './sign-up-section/sign-up-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { AddProductSectionComponent } from './add-product-section/add-product-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { AddCategorySectionComponent } from './add-category-section/add-category-section.component';
import { AddSalesSectionComponent } from './add-sales-section/add-sales-section.component';
import { SalesSectionComponent } from './sales-section/sales-section.component';
import { PurchasesSectionComponent } from './purchases-section/purchases-section.component';
import { AddPurchasesSectionComponent } from './add-purchases-section/add-purchases-section.component';
import { ReportsSectionComponent } from './reports-section/reports-section.component';
import { StaffProfileSectionComponent } from './staff-profile-section/staff-profile-section.component';
import { StaffSectionComponent } from './staff-section/staff-section.component';
import { AddStaffSectionComponent } from './add-staff-section/add-staff-section.component';
import { AddCustomerSectionComponent } from './add-customer-section/add-customer-section.component';
import { CustomerSectionComponent } from './customer-section/customer-section.component';
import { SupplierSectionComponent } from './supplier-section/supplier-section.component';
import { AddSupplierSectionComponent } from './add-supplier-section/add-supplier-section.component';
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { AdminProfileSectionComponent } from './admin-profile-section/admin-profile-section.component';
import { AddAdminSectionComponent } from './add-admin-section/add-admin-section.component';
import { SideBarSectionComponent } from './side-bar-section/side-bar-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { EditAdminSectionComponent } from './edit-admin-section/edit-admin-section.component';
import { FormsModule } from '@angular/forms';
import { ShiftListSectionComponent } from './shift-list-section/shift-list-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInSectionComponent,
    SignUpSectionComponent,
    ProductSectionComponent,
    AddProductSectionComponent,
    CategorySectionComponent,
    AddCategorySectionComponent,
    AddSalesSectionComponent,
    SalesSectionComponent,
    PurchasesSectionComponent,
    AddPurchasesSectionComponent,
    ReportsSectionComponent,
    StaffProfileSectionComponent,
    StaffSectionComponent,
    AddStaffSectionComponent,
    AddCustomerSectionComponent,
    CustomerSectionComponent,
    SupplierSectionComponent,
    AddSupplierSectionComponent,
    DashboardSectionComponent,
    AdminSectionComponent,
    AdminProfileSectionComponent,
    AddAdminSectionComponent,
    SideBarSectionComponent,
    FooterSectionComponent,
    EditAdminSectionComponent,
    ShiftListSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
