import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Directive({
    selector: '[isRole]'
})
export class IsRoleDirective {

    /**
     * Use the same input name as the selector
    */
    @Input() set isRole(role: string) {
        if (this._authService.checkUserPermission(role)) {
            this._viewContainer.createEmbeddedView(this._template);
        } else {
            this._viewContainer.clear();
        }
    }
    constructor(
        private _viewContainer: ViewContainerRef,
        private _template: TemplateRef<any>,
        private _authService: AuthService
    ) { }

}
