import { Component } from '@angular/core';
import { ChatWidgetComponent } from '../../../shared/components/chat-widget/chat-widget.component';

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [ChatWidgetComponent],
  templateUrl: './demo-page.component.html',
  styleUrl: './demo-page.component.scss'
})
export class DemoPageComponent {

}
