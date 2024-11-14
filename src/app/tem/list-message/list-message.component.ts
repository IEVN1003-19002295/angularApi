import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageserviceService } from '../messageservice.service'

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-message.component.html',
  styles: ''
})
export class ListMessageComponent {

  constructor(public messageService: MessageserviceService){}

}
