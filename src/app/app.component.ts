import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    raining = true;

    user = this._authService.user;

    constructor(
        private _authService: AuthService
    ) {

    }

    ngOnInit(): void { }
}
