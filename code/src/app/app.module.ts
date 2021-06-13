import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { NotfoundComponent } from "./notfound/notfound.component";
import { MarkdownModule } from "ngx-markdown";
// import { RecipesModule } from "./recipes.module";
// import { ShoppingListModule } from "./shopping-list/shopping-list.module";
// import { noticeboardModule } from "./noticeboard/noticeboard.module";
import { SharedModule } from "./shared/alert/shared.module";
import { CoreModule } from "./core.module";
// import { AuthModule } from "./auth/auth.module";

// commenting out these components because already declared in shared module.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // DropdownDirective,    
    NotfoundComponent,
    // LoadingComponent,
    // AlertComponent,
    // PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    // RecipesModule,
    // ShoppingListModule,
    // noticeboardModule,
    SharedModule,
    CoreModule,
    // AuthModule
  ],
 
  bootstrap: [AppComponent],
})
export class AppModule {}
