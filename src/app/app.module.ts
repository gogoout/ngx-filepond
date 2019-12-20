import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilePondModule, FILEPOND_PLUGINS_TOKEN } from './modules/filepond/public_api';
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
