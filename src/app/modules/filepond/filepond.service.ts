import {Injectable, Inject, PLATFORM_ID, Optional} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {FILEPOND_PLUGINS_TOKEN} from './tokens';

@Injectable({
    providedIn: 'root'
})
export class FilePondService {
    private _filepond: any;

    async lazyload(): Promise<any> {
        if (!isPlatformBrowser(this.platformId)) {
            return null;
        }

        if (this._filepond) {
            return this._filepond;
        }
        this._filepond = await import ('filepond');

        // register plugin
        if (this.plugins instanceof Promise) {
            const plugins = await this.plugins;
            this._filepond.registerPlugin(...plugins);
        } else {
            this._filepond.registerPlugin(...this.plugins);
        }

        return this._filepond;
    }

    async isSupported(): Promise<boolean> {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }
        const filepond = await this.lazyload();
        return filepond.supported();
    }

    constructor(@Inject(PLATFORM_ID) private platformId: string,
                @Optional() @Inject(FILEPOND_PLUGINS_TOKEN) private plugins: any[] | Promise<any[]> = []) {
    }
}
