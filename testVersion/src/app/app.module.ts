import { AppRoutingModule, routingComponent } from './app-routing.Module';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SidebarModule} from 'ng-sidebar';
import {LocationStrategy , HashLocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { Sidebar3Component } from './sidebar3/sidebar3.component';
import { TestReComComponent } from './test-re-com/test-re-com.component';
import { BadgeComponent } from './badge/badge.component';
import { PubServiceService} from './pub-service.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    // DepartmentListComponent,
    // EmployeeListComponent,
    routingComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    EnrollmentFormComponent,
    SidebarComponent,
    Sidebar2Component,
    Sidebar3Component,
    TestReComComponent,
    BadgeComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot()

  ],
  providers: [
    PubServiceService,
    PostService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
