import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { MainComponent } from './components/main/main.component'
import { ActivityModule } from './components/activity/activity.module'
import { AuthComponent } from './pages/auth/auth.component'
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    AuthComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ActivityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
