import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  lstChanges: [] = [];
  @ViewChild("myckeditor") ckeditor: any;

  constructor() {
    this.mycontent = `<p>Esto es<strong>una pruyeba del valor proveniendo de API</strong></p>`;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',   
      toolbarGroups: [{
          "name": "basicstyles",
          "groups": ["basicstyles"]
        },
        {
          "name": "links",
          "groups": ["links"]
        },
        {
          "name": "paragraph",
          "groups": ["list", "blocks"]
        },
        {
          "name": "insert",
          "groups": ["insert"]
        },
        {
          "name": "styles",
          "groups": ["styles"]
        }        
      ],
      removeButtons: 'Subscript,Superscript,Anchor,Styles,Smiley,CreateDiv,Flash,Table,HorizontalRule,Iframe,SpecialChar,PageBreak',
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log("onChange", $event);
    this.lstChanges.push($event);
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
}
