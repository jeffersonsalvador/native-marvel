import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SearchComponent,
        SearchResultsComponent,
        ComicDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [AuthenticationService, AuthenticationGuard]
})
export class AppModule { }
