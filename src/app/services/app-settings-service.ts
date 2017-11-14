import { Injectable } from '@angular/core';

interface AppSettings {
    show3dtiles: boolean;
    entitiesUpdateRate: number;
    showMapLayer: boolean;
    keyboardControl: boolean;
}

@Injectable()
export class AppSettingsService {
    get settings(): AppSettings {
        return this._settings;
    }

    set settings(value: AppSettings) {
        this._settings = value;
    }

    private _settings: AppSettings = {
        entitiesUpdateRate: 0,
        showMapLayer: true,
        show3dtiles: false,
        keyboardControl: false,
    };

    setSettings(settings) {
        Object.assign(this._settings, settings);
    }

    get showMapLayer(): boolean {
        return this._settings.showMapLayer;
    }

    set showMapLayer(value: boolean) {
        this._settings.showMapLayer = value;
    }

    get show3dtiles() {
        return this._settings.show3dtiles;
    }

    set show3dtiles(value: boolean) {
        this._settings.show3dtiles = value;
    }

    get keyboardControl() {
        return this._settings.keyboardControl;
    }

    set keyboardControl(value: boolean) {
        this._settings.keyboardControl = value;
    }
}
