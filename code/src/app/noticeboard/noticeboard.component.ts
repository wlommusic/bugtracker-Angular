import { Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent {

   angularVersion = VERSION.full;
  ngxMarkdownVersion = '12.0.1';

  markdown = `## Markdown __rulez__!`
}
