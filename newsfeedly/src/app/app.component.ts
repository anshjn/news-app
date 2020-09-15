import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsfeedly';
  searchTerm = '';
  response = [];
  checkboxes = [
    {name: 'ABC News', value: 'abc-news'},
    {name: 'BBC News', value: 'bbc-news'},
    {name: 'BBC Sport', value: 'bbc-sport'},
    {name: 'ESPN', value: 'espn'},
    {name: 'Business Insider', value: 'business-insider'},
    {name: 'Buzzfeed', value: 'buzzfeed'},
    {name: 'CNN', value: 'cnn'},
  ]
  baseUrl = 'http://localhost:4000/'
  channels = [];
  allChannels = "abc-news,bbc-news,bbc-sport,espn,business-insider,buzzfeed,cnn";
  constructor(private http: HttpClient) {

  }

  getTopStories() {
    this.response = [];
    this.http.get(this.baseUrl + 'top-stories?term=' + this.searchTerm + '&channels=' + ((this.channels.length > 0)? this.channels.join(',') : this.allChannels)).subscribe(data => {
      JSON.parse(JSON.stringify(data));
      console.log(data['articles']);
      this.response = data['articles'].length? data['articles'] : '';
    });
  }
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
    if(this.searchTerm.length > 0) this.searchByTerm();
    else this.getTopStories();
  }

  searchByTerm() {
    this.http.get(this.baseUrl + 'news?term=' + this.searchTerm + '&channels=' + ((this.channels.length > 0)? this.channels.join(',') : this.allChannels)).subscribe(data => {
      this.response = [];
      JSON.parse(JSON.stringify(data));
      console.log(data['articles']);
      this.response = data['articles'].length? data['articles'] : '';
    });
  }
}
