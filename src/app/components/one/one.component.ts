import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  allowServer = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Visit(){
    // this.router.navigate(['/two']);
    this.allowServer = true;
  }

}
