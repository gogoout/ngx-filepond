import { InjectionToken } from '@angular/core';

export const FILEPOND_PLUGINS_TOKEN = new InjectionToken<any[] | Promise<any[]>>('filepond-plugins');
