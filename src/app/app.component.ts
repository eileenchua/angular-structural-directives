import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-structural-directives';

    raining = true;

    isMember = false;
    isPrestigeMember = false;
    user = this._authService.user;

    constructor(
        private _authService: AuthService
    ) {

    }

    ngOnInit(): void {
        this.isMember = this.user.permission.includes(("Member"));
        this.isPrestigeMember = this.user.permission.includes("Prestige");
    }
}
