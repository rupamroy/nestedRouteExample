import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css']
})
export class ExceptionComponent implements OnInit {

  public id='';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
     this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
