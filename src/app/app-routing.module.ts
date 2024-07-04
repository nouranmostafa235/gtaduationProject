import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalInfoComponent } from './register/medical-info/medical-info.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { EmergencyContactComponent } from './register/emergency-contact/emergency-contact.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './User/profile/profile.component';
import { FamilyHistoryComponent } from './User/family-history/family-history.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import { UpdateInfoComponent } from './User/update-info/update-info.component';
import { PredictComponent } from './User/predict/predict.component';
import { InstitutionLoginComponent } from './institution-login/institution-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminHomePageComponent } from './Admin/admin-home-page/admin-home-page.component';
import { ClinicComponent } from './Admin/clinic/clinic.component';
import { LabComponent } from './Admin/lab/lab.component';
import { LabLoginComponent } from './Institutions/Labs/lab-login/lab-login.component';
import { LabHomePageComponent } from './Institutions/Labs/lab-home-page/lab-home-page.component';
import { ClinicHomePageComponent } from './Institutions/Clinics/clinic-home-page/clinic-home-page.component';
import { ViewInstitutionProfileComponent } from './User/view-institution-profile/view-institution-profile.component';
import { ViewClinicProfileComponent } from './User/view-clinic-profile/view-clinic-profile.component';
import { UserNavBarComponent } from './User/user-nav-bar/user-nav-bar.component';
import { UploadDiagnoseComponent } from './Institutions/Clinics/upload-diagnose/upload-diagnose.component';
import { UploadMedicalAnalysisComponent } from './Institutions/Clinics/upload-medical-analysis/upload-medical-analysis.component';
import { LabUploadMedicalAnalysisComponent } from './Institutions/Labs/lab-upload-medical-analysis/lab-upload-medical-analysis.component';
import { LabNavbarComponent } from './Institutions/Labs/lab-navbar/lab-navbar.component';
import { ClinicNavBarComponent } from './Institutions/Clinics/clinic-nav-bar/clinic-nav-bar.component';
import { ViewUserProfileInClinicComponent } from './Institutions/Clinics/view-user-profile-in-clinic/view-user-profile-in-clinic.component';
import { ChooseViewOptionClinicComponent } from './Institutions/Clinics/choose-view-option-clinic/choose-view-option-clinic.component';
import { ViewBySearchINClinicComponent } from './Institutions/Clinics/view-by-search-inclinic/view-by-search-inclinic.component';
import { ViewOptionsInLabComponent } from './Institutions/Labs/view-options-in-lab/view-options-in-lab.component';
import { ViewBySearchInlabComponent } from './Institutions/Labs/view-by-search-inlab/view-by-search-inlab.component';
import { ViewUserProfileInLabComponent } from './Institutions/Labs/view-user-profile-in-lab/view-user-profile-in-lab.component';
import { QrCodeScannerComponent } from './QRCode/qr-code-scanner/qr-code-scanner.component';
import { UserFilesComponent } from './User/user-files/user-files.component';
import { ViewUserFilesInClinicComponent } from './Institutions/Clinics/view-user-files-in-clinic/view-user-files-in-clinic.component';
import { ScannerInLabComponent } from './Institutions/Labs/scanner-in-lab/scanner-in-lab.component';
import { AnyUserViewComponent } from './any-user-view/any-user-view.component';
const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'medical_info', component: MedicalInfoComponent },
  { path: 'emergency_Contact', component: EmergencyContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'institutionLogin', component: InstitutionLoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminHomePage', component: AdminHomePageComponent },
  { path: 'adminHomePage/clinic', component: ClinicComponent },
  { path: 'adminHomePage/labs', component: LabComponent },
  { path: 'labLogin', component: LabLoginComponent },
  {
    path: "lab", component: LabNavbarComponent, children: [{ path: 'Home', component: LabHomePageComponent },
    { path: "uploadAnalysis", component: LabUploadMedicalAnalysisComponent },
    { path: "option", component: ViewOptionsInLabComponent },
    { path: "searchUser", component: ViewBySearchInlabComponent },
    { path: "viewUser", component: ViewUserProfileInLabComponent },
    {path:"qrScanner",component:ScannerInLabComponent}
    ]
  },
  {
    path: "clinic", component: ClinicNavBarComponent, children: [{ path: 'Home', component: ClinicHomePageComponent },
    { path: "uploadDiagnose", component: UploadDiagnoseComponent },
    { path: "uploadAnalysis", component: UploadMedicalAnalysisComponent },
    { path: "viewUser", component: ViewUserProfileInClinicComponent },
    { path: "option", component: ChooseViewOptionClinicComponent },
    { path: "seachUser", component: ViewBySearchINClinicComponent },
    { path: "userFiles", component: ViewUserFilesInClinicComponent },
    {path:"qrScanner",component:QrCodeScannerComponent}
    ]
  },

  {
    path: 'UserProfile', component: UserNavBarComponent, children: [
      { path: "profile", component: ProfileComponent },
      { path: "updataInfo", component: UpdateInfoComponent },
      { path: "changePassword", component: ChangePasswordComponent },
      { path: "predictDisease", component: PredictComponent },
      { path: 'clinicProfile', component: ViewClinicProfileComponent },
      { path: 'labProfile', component: ViewInstitutionProfileComponent },
      { path: 'familyHistory', component: FamilyHistoryComponent },
      { path: 'files', component: UserFilesComponent },
    ]
  },
  {path:'user',component:AnyUserViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
