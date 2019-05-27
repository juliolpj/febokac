import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExportarService } from 'src/app/services/exportar.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-modal-download',
  templateUrl: './modal-download.component.html',
  styles: []
})
export class ModalDownloadComponent implements OnInit {
  @ViewChild('btCloseDownload') btClose: ElementRef;
  @ViewChild('aDownload') aDownload: ElementRef;
  @Output() emitExportar = new EventEmitter<string>();

  downloadJsonHref;
  preparacionStatus = 0;
  mensaje = 'El proceso de exportar los datos puede tardar varios minutos. Para iniciar pulse en el botón preparar datos. Una vez finalizado el proceso pulse en el botón exportar';
  
  constructor(private sanitizer: DomSanitizer,
              private exportarService: ExportarService) { }

  ngOnInit() {
  }

  cancelar(){
    this.btClose.nativeElement.click();
  }

  exportarDatos(){
    this.aDownload.nativeElement.click();
    this.emitExportar.emit('Exportar');
    this.btClose.nativeElement.click();
  }

  generateDownloadJsonUri() {
    this.mensaje = 'P r e p a r a n d o . . .';
    this.preparacionStatus = 1;
    let jsonData = '{';
    let contador = 0;
    let nombres: string[] =  [];
    const categorias$ = this.exportarService.getCategorias$();
    nombres.push('categorias');
    const clubes$ = this.exportarService.getClubes$();
    nombres.push('clubes');
    const distancias$ = this.exportarService.getDistancias$();
    nombres.push('distancias');

    const competencias$ = this.exportarService.getCompetencias$();
    nombres.push('competencias');
    const consola$ = this.exportarService.getConsola$();
    nombres.push('consola');
    const inscripciones$ = this.exportarService.getInscripciones$();
    nombres.push('inscripciones');
    const palistas$ = this.exportarService.getPalistas$();
    nombres.push('palistas');
    const users$ = this.exportarService.getUsers$();
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
          this.mensaje = 'Preparación finalizada';
          this.preparacionStatus = 2;
        } else {
          jsonData = jsonData + ',';
        }
        
      }
    );

  }
}
