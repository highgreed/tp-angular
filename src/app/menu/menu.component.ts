import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';
import { ChatServiceService } from '../chat-service.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  questions: Channel[];
  constructor(private ChatServiceService: ChatServiceService) { }

  ngOnInit() {
  this.ChatServiceService.getChannel().subscribe(
    (questions: Channel[]) => this.questions = questions
  )
  }
  changeChannel(chan: Channel): void {
    this.ChatServiceService.changeChannel(chan).subscribe();
  }
}
