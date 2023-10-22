import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { ProviderComponent } from './provider/provider.component';
import { SeekComponent } from './seek/seek.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

import { CardModule } from 'primeng/card';

import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabViewModule } from 'primeng/tabview';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    NavComponent,
    ProviderComponent,
    SeekComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CardModule,
    MessagesModule,
    TabViewModule,
    MessageModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
