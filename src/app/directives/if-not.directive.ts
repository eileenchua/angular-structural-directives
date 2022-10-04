import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIfNot]'
})
export class IfNotDirective {

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
