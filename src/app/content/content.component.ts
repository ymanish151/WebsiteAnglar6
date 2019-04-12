import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentAndService={};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.contentAndService = this.getContent()
  }

  getContent = () => {
      return this.config.getConfig().contentAndService;
  }

}
