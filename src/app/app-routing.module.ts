import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccComponent } from './home/acc/acc.component';
import { AboutComponent } from './home/about/about.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { BlogDetailsComponent } from './home/blog-details/blog-details.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './home/contact/contact.component';
import { PasswordFComponent } from './auth/password-f/password-f.component';
import { DashbordComponent } from './account/dashbord/dashbord.component';
import { TransfertComponent } from './account/transfert/transfert.component';
import { InvestmentComponent } from './account/investment/investment.component';
import { SettingsComponent } from './account/settings/settings.component';
import { ProfileComponent } from './account/settings/profile/profile.component';
import { WalletComponent } from './account/settings/wallet/wallet.component';
import { BankComponent } from './account/settings/bank/bank.component';
import { AccountComponent } from './account/account.component';
import { FacturesComponent } from './account/factures/factures.component';
import { WithdrawComponent } from './account/withdraw/withdraw.component';
import { ImpactSocialComponent } from './account/impact-social/impact-social.component';
import { ImpactSocialProjectComponent } from './account/impact-social-project/impact-social-project.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: AccComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "blogs",
        component: BlogsComponent
      },
      {
        path: "blog/:id",
        component: BlogDetailsComponent
      }
    ]
  },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "forget-password",
        component: PasswordFComponent
      }
    ]
  },
  {
    path: "app",
    component: AccountComponent,
    children: [
      {
        path: "",
        component: DashbordComponent
      },
      {
        path: "transfert",
        component: TransfertComponent
      },
      {
        path: "invest",
        component: InvestmentComponent
      },
      {
        path: "payement",
        component: FacturesComponent
      },
      {
        path: "withdraw",
        component: WithdrawComponent
      },
      {
        path: "history",
        component: SettingsComponent
      },
      {
        path: "social",
        component: ImpactSocialComponent
      },
      {
        path: "projet/:id",
        component: ImpactSocialProjectComponent
      },
      {
        path: "settings",
        component: SettingsComponent,
        children: [
          {
            path: "profile",
            component: ProfileComponent
          },
          {
            path: "wallet",
            component: WalletComponent
          },
          {
            path: "bank",
            component: BankComponent
          }
        ]
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
