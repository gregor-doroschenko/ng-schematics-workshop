import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>',
  templateUrl: './<%=dasherize(name)%>.component.html',
  styleUrl: './<%=dasherize(name)%>.component.css'
})
export class <%=classify(name)%>Component implements OnInit {

  greeting: string = 'Hello Angular Meetup Guest!';

  constructor() {}

  ngOnInit() {
    console.log(this.greeting);
  }

}
