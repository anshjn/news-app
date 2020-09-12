import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsfeedly';
  searchTerm = '';
  checkboxes = [
    {name: 'ABC News'},
    {name: 'BBC News'},
    {name: 'BBC Sport'},
    {name: 'ESPN'},
    {name: 'Business Insider'},
    {name: 'Buzzfeed'},
    {name: 'CNN'},
  ]

  channels = [];

  valueTrue(id, val) {
    console.log(id, val);
    let event = document.getElementById(id);
    if(event['checked']) {
      this.channels.push(val);
    } else {
      if(!event['checked'] && this.channels.indexOf(val) > -1) {
        this.channels.splice(this.channels.indexOf(val), 1);
      }
    }
    console.log(this.channels);
  }

  letsSearch() {
    console.log(this.searchTerm);
  }
}
