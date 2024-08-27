import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input('tooltip') tooltipTitle: string = ''; // Provide a default value
  tooltip: HTMLElement | null = null; // Initialize tooltip as null
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.tooltip = this.renderer.createElement('span');
    if (this.tooltip) {
      this.tooltip.innerHTML = this.tooltipTitle;
      this.renderer.appendChild(document.body, this.tooltip);

      this.renderer.addClass(this.tooltip, 'tooltip');

      const hostPos = this.el.nativeElement.getBoundingClientRect();
      const tooltipPos = this.tooltip.getBoundingClientRect();

      const top = hostPos.top - tooltipPos.height - this.offset;
      const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;

      this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    }
  }

  hide() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}
