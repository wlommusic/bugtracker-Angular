import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { NotfoundComponent } from "./notfound/notfound.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/bugs", pathMatch: "full" },
  {
    path: "bugs",
    loadChildren: () => import("./recipes.module").then((m) => m.RecipesModule),
  },
  {
    path: "noticeboard",
    loadChildren: () =>
      import("./noticeboard/noticeboard.module").then(
        (m) => m.noticeboardModule
      ),
  },

  {
    path: "buglist",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },

  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "/404" },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules}),
    // RecipesRoutingModule,
    // ShoppingListModule,
    // noticeboardModule,
    AuthModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
