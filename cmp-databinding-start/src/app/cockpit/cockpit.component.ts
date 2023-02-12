import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // serverName = '';
  newServerContent = '';

  constructor() {}
  ngOnInit(): void {}

  onServerAdded(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
       serverName: nameInput.value,
       serverContent: this.newServerContent
      });
  }

  onBlueprintAdded(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
     });
  }
}

