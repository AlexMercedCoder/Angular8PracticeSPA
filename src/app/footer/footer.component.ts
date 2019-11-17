import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {



  }

  ngOnInit() {


  }

  stylecounter: number = 0;

  style1: boolean = false;
  style2: boolean = false;
  style3: boolean = false;

  changeStyle = () => {
      console.log(this.stylecounter);
      this.stylecounter++;
      console.log(this.stylecounter);
      switch (this.stylecounter){
          case 1:
          this.style1=true;
          this.style2=false;
          this.style3=false;
          break;

          case 2:
          this.style1=false;
          this.style2=true;
          this.style3=false;
          break;

          case 3:
          this.style1=false;
          this.style2=false;
          this.style3=true;
          break;

          case 4:
          this.stylecounter = 0;
          this.style1=false;
          this.style2=false;
          this.style3=false;
          break;
      }

  }

}
