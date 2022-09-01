import { Component, Input } from '@angular/core';

@Component({
  selector: 'georg',
  template: `<h2>Georg &uuml;bt!</h2><p>Das funktioniert auch: {{geheimwert}}</p>`,
  styles: [`h2 { font-family: Lato; }`]
})
export class GeorgComponent  {
  @Input() georg: string;
}