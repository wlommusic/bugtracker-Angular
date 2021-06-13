import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { NoticeboardComponent } from "./noticeboard.component";
import { MarkdownModule } from "ngx-markdown";
import { SharedModule } from "../shared/alert/shared.module";


@NgModule({
  declarations: [NoticeboardComponent],
  imports: [
    SharedModule,
    MarkdownModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: NoticeboardComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class noticeboardModule {}
