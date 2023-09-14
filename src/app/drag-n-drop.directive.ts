import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {

  @Output() onFileDropped = new EventEmitter<any>();
  
  constructor() { }

  //drag-over listener
  @HostListener('dragover', ['$event']) onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  //drag-leave
  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  //drag-drop
  @HostListener('drop', ['$event'])
  public onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    //let files = event.dataTransfer.files;
  }

}
