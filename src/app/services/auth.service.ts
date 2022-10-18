import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    get user() {
        return {
            name: "Eileen",
            permission: "Prestige" // Update this to "Member" to see the section for members
        }
    }

    constructor() { }

    checkUserPermission(role: string) {
        return this.user.permission === role;
    }
}
