import { Component, OnInit, Input, OnChanges, 
        SimpleChanges, DoCheck, AfterContentInit, 
        AfterContentChecked, AfterViewChecked, AfterViewInit,
        OnDestroy,
        ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
 OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, contet: string};
  @Input() name: string;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit is called!')
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called')
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called')
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }
}
