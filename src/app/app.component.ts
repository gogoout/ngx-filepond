import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('myPond', { static: true }) myPond: any;

  pondOptions = {
    multiple: true,
    labelIdle: 'Drop files here...',
    // fake server to simulate loading a 'local' server file and processing a file
    server: {
      process: (fieldName, file, metadata, load) => {
        // simulates uploading a file
        setTimeout(() => {
          load(Date.now())
        }, 1500);
      },
      load: (source, load) => {
        // simulates loading a file from the server
        fetch(source).then(res => res.blob()).then(load);
      }
    }
  }

  pondFiles = [
    {
      source: 'assets/photo.jpeg',
      options: {
        type: 'local'
      }
    }
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

}
