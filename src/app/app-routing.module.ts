import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInSectionComponent } from './sign-in-section/sign-in-section.component';
import { SignUpSectionComponent } from './sign-up-section/sign-up-section.component';
import { AddAdminSectionComponent } from './add-admin-section/add-admin-section.component';
import { AdminProfileSectionComponent } from './admin-profile-section/admin-profile-section.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { AddCategorySectionComponent } from './add-category-section/add-category-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { AddProductSectionComponent } from './add-product-section/add-product-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { AddPurchasesSectionComponent } from './add-purchases-section/add-purchases-section.component';
import { PurchasesSectionComponent } from './purchases-section/purchases-section.component';
import { AddSalesSectionComponent } from './add-sales-section/add-sales-section.component';
import { SalesSectionComponent } from './sales-section/sales-section.component';
import { AddStaffSectionComponent } from './add-staff-section/add-staff-section.component';
import { StaffSectionComponent } from './staff-section/staff-section.component';
import { StaffProfileSectionComponent } from './staff-profile-section/staff-profile-section.component';
import { AddSupplierSectionComponent } from './add-supplier-section/add-supplier-section.component';
import { SupplierSectionComponent } from './supplier-section/supplier-section.component';
import { CustomerSectionComponent } from './customer-section/customer-section.component';
import { AddCustomerSectionComponent } from './add-customer-section/add-customer-section.component';
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';
import { ReportsSectionComponent } from './reports-section/reports-section.component';
import { EditAdminSectionComponent } from './edit-admin-section/edit-admin-section.component';
import { ShiftListSectionComponent } from './shift-list-section/shift-list-section.component';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: SignInSectionComponent },
  {path: 'account', component: SignUpSectionComponent },
  {path: 'dashboard', component: DashboardSectionComponent },
  {path: 'shiftlist', component: ShiftListSectionComponent },
  {path: 'products', component: ProductSectionComponent },
  {path: 'addproducts', component: AddProductSectionComponent },
  {path: 'category', component: CategorySectionComponent },
  {path: 'addcategory', component: AddCategorySectionComponent },
  {path: 'addstaff', component: AddStaffSectionComponent },
  {path: 'staff', component: StaffSectionComponent },
  {path: 'addsupplier', component: AddSupplierSectionComponent },
  {path: 'supplier', component: SupplierSectionComponent },
  {path: 'profile', component: AdminProfileSectionComponent  },
  {path: 'administrators', component: AdminSectionComponent },
  {path: 'addadmin', component: AddAdminSectionComponent },
  {path: 'customer', component: CustomerSectionComponent },
  {path: 'addcustomer', component: AddCustomerSectionComponent },
  {path: 'purchases', component: PurchasesSectionComponent },
  {path: 'addpurchases', component: AddPurchasesSectionComponent },
  {path: 'reports', component: ReportsSectionComponent },
  {path: 'sales', component: SalesSectionComponent },
  {path: 'addsales', component: AddSalesSectionComponent },
  {path: 'editadmin', component: EditAdminSectionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
