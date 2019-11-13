import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

    blogs: Object;

      constructor(private _http: HttpService) { }

      ngOnInit() {
        this._http.getBlog().subscribe(data => {
          this.blogs = data
          console.log(this.blogs);
        }
      );
      }

}
