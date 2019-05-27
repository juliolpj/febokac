import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DownloadService } from './download.service';
import { merge, of } from 'rxjs';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styles: []
})
export class DownloadComponent implements OnInit {
  @ViewChild('aDownload') btClose: ElementRef;
  downloadJsonHref;
  theJSON: string;

  constructor(private sanitizer: DomSanitizer,
              private downloadService: DownloadService) { }

  ngOnInit() {
    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri_Viejo() {
    this.downloadService.getCategorias$().subscribe(
      data => {
        this.theJSON = '{ "categorias":' + JSON.stringify(data) + '}';
        this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(this.theJSON));
        console.log('Ya puedes darle click');
        
      }
    )
  }

/*   concatenar2() {
    let jsonData = '{';
    let contador = 0;
    let nombres: string[] =  [];
    const distancias$ = of([ {"distancia": 100}, {"distancia": 200} ]);
    nombres.push('distancias');
    const clubes$ = of([ {"club": "uno"}, {"club": "dos"} ]);
    nombres.push('clubes');

    const result$ = merge(distancias$, clubes$);
    result$.subscribe(
      data => {
        //console.log(data)
        jsonData = jsonData + (contador > 0 ? ',': '') + '"' + nombres[contador] + '":' + JSON.stringify(data);
        contador++;
        console.log('jsonData', jsonData);
      },
      error =>console.log(error),
      () => {
        jsonData = jsonData + '}';
        console.log('jsonData', jsonData);
      }
    );
  } */

  generateDownloadJsonUri() {
    let jsonData = '{';
    let contador = 0;
    let nombres: string[] =  [];
    const categorias$ = this.downloadService.getCategorias$();
    nombres.push('categorias');
    const clubes$ = this.downloadService.getClubes$();
    nombres.push('clubes');
    const distancias$ = this.downloadService.getDistancias$();
    nombres.push('distancias');

    const competencias$ = this.downloadService.getCompetencias$();
    nombres.push('competencias');
    const consola$ = this.downloadService.getConsola$();
    nombres.push('consola');
    const inscripciones$ = this.downloadService.getInscripciones$();
    nombres.push('inscripciones');
    const palistas$ = this.downloadService.getPalistas$();
    nombres.push('palistas');
    const users$ = this.downloadService.getUsers$();
    nombres.push('users');

    const result$ = merge(categorias$, clubes$, distancias$, competencias$, consola$, inscripciones$, palistas$, users$);
    result$.subscribe(
      data => {
        jsonData = jsonData +  '"' + nombres[contador] + '":' + JSON.stringify(data);
        contador++;

        if (contador == nombres.length) {
          jsonData = jsonData + '}';
          this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
          console.log('jsonData', jsonData);
        } else {
          jsonData = jsonData + ',';
        }
        
      }
    );

  }

  descargar() {
    this.btClose.nativeElement.click();
  }
}
