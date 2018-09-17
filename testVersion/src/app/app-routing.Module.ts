import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

const routes: Routes=[
    {path:"", redirectTo:'/departments', pathMatch:'full'},
    {path: "departments", component:DepartmentListComponent},
    {
        path: "departments/:id", 
        component: DepartmentDetailComponent,
        children: [
            {path:'overview', component:DepartmentOverviewComponent},
            {path:'contact' , component: DepartmentContactComponent}
        ]
    },
    {path: "employees", component: EmployeeListComponent},
    {path: "form", component:EnrollmentFormComponent},
    {path: "sidebar", component:SidebarComponent},
    {path: "sidebar2", component:Sidebar2Component},

    {path:"**", component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
export const routingComponent=[
    DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
]