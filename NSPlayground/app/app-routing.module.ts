import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationService } from './services/authentication.service';


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] },
    { path: "login", component: LoginComponent },
    { path: "search", component: SearchComponent, canActivate: [AuthenticationGuard] },
    { path: "search-results", component: SearchResultsComponent, canActivate: [AuthenticationGuard] },
    { path: "comic-details", component: ComicDetailsComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
