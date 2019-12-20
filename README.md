# Angular FilePond

Angular FilePond is a handy adapter component for [FilePond](https://github.com/pqina/filepond), a JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pqina/ngx-filepond/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/ngx-filepond.svg)](https://www.npmjs.com/package/ngx-filepond)

<img src="https://github.com/pqina/filepond-github-assets/blob/master/filepond-animation-01.gif?raw=true" width="370" alt=""/>

## Installation

Install FilePond component from npm.

```bash
npm install ngx-filepond filepond --save
```

The `ngx-filepond` will lazyload the `filepond` package when it needs and will automatic register the plugin for you.
Import `FilePondModule` and if needed register any plugins. Please note that plugins need to be [installed from npm](https://pqina.nl/filepond/docs/patterns/plugins/introduction/#installing-plugins) separately.

Add FilePond styles path `./node_modules/filepond/dist/filepond.min.css` to the `build.options.styles` property in `angular.json`


```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilePondModule, FILEPOND_PLUGINS_TOKEN } from 'ngx-filepond';
// uncomment these to eager loading the plugins
// import { plugins } from './plugins';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FilePondModule
  ],
  providers: [
    // uncomment these to eager loading the plugins
    // {
    //   provide: FILEPOND_PLUGINS_TOKEN,
    //   useValue: plugins
    // },
    // lazyload the plugins
    {
      provide: FILEPOND_PLUGINS_TOKEN,
      useFactory: async () => {
        return (await import('./plugins')).plugins;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

in `plugins.ts`
```typescript
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

export const plugins = [FilePondPluginImageExifOrientation, FilePondPluginImagePreview];
```

```html
<!-- app.component.html -->
<file-pond #myPond 
    [options]="pondOptions" 
    [files]="pondFiles"
    (oninit)="pondHandleInit()"
    (onaddfile)="pondHandleAddFile($event)">
</file-pond>
```

```ts
// app.component.ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('myPond') myPond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }

  pondFiles = [
    'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
}
```

[Read the docs for more information](https://pqina.nl/filepond/docs/patterns/frameworks/angular/)
