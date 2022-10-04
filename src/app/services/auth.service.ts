import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    get user() {
        return {
            name: "Eileen",
            permission: "Member"
        }
    }

    constructor() { }

    checkUserPermission(role: string) {
        return this.user.permission === role;
    }
}

interface UserDetails {
    name: string,
    permission: string
}
