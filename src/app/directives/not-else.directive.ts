import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appNot]'
})
/**
 * If not & else directive
 * Sample implementation of multiple inputs for structural directives.

 * This example was created solely for educational/demo purposes.
 * Simply use *ngIf if such functionality is required.
 */
export class NotElseDirective implements OnChanges {

    private _condition = false;

    /**
     * Use the same input name as the selector
     */
    @Input('appNot') set condition(val: boolean) {
        this._condition = val;
    }

    /**
     * Important: your input name should have the same prefix as your selector.
     * e.g. appNot, appNotElse
     * This additional input will NOT work if you do not follow the naming convention. (Try it!)
     */
    @Input('appNotElse')
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
