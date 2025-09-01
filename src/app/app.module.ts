import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccComponent } from './home/acc/acc.component';
import { AboutComponent } from './home/about/about.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { BlogDetailsComponent } from './home/blog-details/blog-details.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './home/contact/contact.component';
import { PasswordFComponent } from './auth/password-f/password-f.component';
import { ProfileComponent } from './account/settings/profile/profile.component';
import { WalletComponent } from './account/settings/wallet/wallet.component';
import { BankComponent } from './account/settings/bank/bank.component';
import { SettingsComponent } from './account/settings/settings.component';
import { TransfertComponent } from './account/transfert/transfert.component';
import { InvestmentComponent } from './account/investment/investment.component';
import { DashbordComponent } from './account/dashbord/dashbord.component';
import { FacturesComponent } from './account/factures/factures.component';
import { WithdrawComponent } from './account/withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccComponent,
    AboutComponent,
    BlogsComponent,
    BlogDetailsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ContactComponent,
    PasswordFComponent,
    ProfileComponent,
    WalletComponent,
    BankComponent,
    SettingsComponent,
    TransfertComponent,
    InvestmentComponent,
    DashbordComponent,
    FacturesComponent,
    WithdrawComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
