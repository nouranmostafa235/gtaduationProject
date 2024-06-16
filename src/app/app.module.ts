import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicalInfoComponent } from './register/medical-info/medical-info.component';
import { EmergencyContactComponent } from './register/emergency-contact/emergency-contact.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProfileComponent } from './User/profile/profile.component';
import { FamilyHistoryComponent } from './User/family-history/family-history.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MedicalInfoComponent,
    EmergencyContactComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    FamilyHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
