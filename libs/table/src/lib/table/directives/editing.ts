import { take } from 'rxjs/operators';

import { Directive, AfterViewInit, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';
import { NegTableCellContext } from '../context/types';

@Directive({ selector: '[negCellEditAutoFocus]' })
export class NegTableCellEditAutoFocusDirective implements AfterViewInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('negCellEditAutoFocus') context: NegTableCellContext<any>;

  private _destroyed: boolean;

  constructor(private elRef: ElementRef<HTMLElement>, private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    const doFocus = () => {
      const context = this.context;
      context.rowContext.updateOutOfViewState();
      if (context.editing && !context.rowContext.outOfView) {
        this.elRef.nativeElement.focus();
      }
    };

    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        if (!this._destroyed) {
          const { viewport } = this.context.table;
          if (viewport && viewport.isScrolling) {
            viewport.scrolling.pipe(take(1)).subscribe(doFocus);
          } else {
            doFocus();
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this._destroyed = true;
  }
}