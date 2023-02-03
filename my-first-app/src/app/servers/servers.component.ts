import { Component, OnInit } from '@angular/core';

@Component({
  selector: `.app-servers`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Teszt Szerver';
  username: string = '';
  isValidInput: boolean = false;
  serverCreated = false;
  servers = ['Testserver', 'TestServer2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }
    ngOnInit() {
    }

    onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created! Name:' + this.serverName;
    }
    onUpdateServerName(event: Event) {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
    }

    handleInput() {
      this.isValidInput = this.username.length > 0 ? true : false;
    }
  
    resetInputField(){
      this.username = '';
      this.isValidInput = false;
    }
}
