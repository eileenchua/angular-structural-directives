import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIfNot]'
})
export class IfNotDirective implements OnChanges {

    private _condition = false;
    @Input('appIfNot') set condition(val: boolean) {
        this._condition = val;
        // this.updateView();
    }

    @Input('appIfNotElse')
    elseTemplate: TemplateRef<any> | null = null;

    constructor(
        private _viewContainerRef: ViewContainerRef,
        private _templateRef: TemplateRef<any>
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.updateView();
    }

    updateView() {
        if (this._condition) {
            // this._viewContainerRef.clear();
            if (this.elseTemplate) {
                this._viewContainerRef.clear();
                this._viewContainerRef.createEmbeddedView(this.elseTemplate);
            } else {
                this._viewContainerRef.clear();
            }
        } else {
            this._viewContainerRef.clear();
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }

}
