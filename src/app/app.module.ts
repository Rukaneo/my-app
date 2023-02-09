import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './form/create/create.component';
import { ViewComponent } from './form/view/view.component';
import { EditComponent } from './form/edit/edit.component';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestService } from './service/test.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TestService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
