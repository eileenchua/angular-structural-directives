import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIfNot]'
})
/**
 * If not directive
 * Sample implementation of the opposite of *ngIf.
 * Replace this code in the if-not-else.directive.ts to see how to set multiple inputs in your structural directive.
 * 
 * This example was created solely for educational/demo purposes.
 * Simply use *ngIf if such functionality is required.
 */
export class IfNotDirective {

    /**
     * Use the same input name as the selector
     */
    @Input() set appIfNot(condition: boolean) {
        if (condition) {
            this._viewContainerRef.clear();
        } else {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }

    constructor(
        private _viewContainerRef: ViewContainerRef,
        private _templateRef: TemplateRef<any>
    ) { }
}
