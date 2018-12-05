import { Injectable, Injector} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService{
    public appConfig : IAppConfig;
    constructor(private injector: Injector){}

    configUrl='/assets/config/config.json';

    loadAppConfig() {
        let http = this.injector.get(HttpClient);

        return http.get(this.configUrl)
            .toPromise()
            .then((data :IAppConfig) => {
                this.appConfig = data;
            })
    }
    
    get Config() {
        return this.appConfig;
    }
}

interface IAppConfig {
    AppName:string;
    ApiUrl:string;
    error:string;
    errorMessage:string;
    formStatus:string;
}