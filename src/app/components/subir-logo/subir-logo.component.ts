import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AngularFireStorage } from '@angular/fire/storage';

import { ClubesService } from 'src/app/services/clubes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subir-logo',
  templateUrl: './subir-logo.component.html',
  styleUrls: ['./subir-logo.component.css']
})
export class SubirLogoComponent implements OnInit {
  @ViewChild('previewImage') previewImage: ElementRef;
  @ViewChild('imageUser') imageUser: ElementRef;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  
  id: string;
  nombre: string;
  imagen: string;
  imgFile: any;

  constructor(
    private dataService: ClubesService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage ) {
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.nombre = data.nombre;

        if (data.imageUrl) {
          const gsReference = this.storage.storage.refFromURL(data.imageUrl);
          gsReference.getDownloadURL().then(
            url => { 
              this.previewImage.nativeElement.src = url;
            }
          )
        }
        
      }
    );
  }

  onChange(e) {
    this.imgFile = e.target.files[0];
    var reader  = new FileReader();

    reader.onloadend =  () => {
      this.previewImage.nativeElement.src = reader.result;
    }
    if (this.imgFile) {
      reader.readAsDataURL(this.imgFile);
    } else {
      this.previewImage.nativeElement.src = "";
    }
  }

  onUpload() {
    this.storage.upload('febocak/clubes/' + this.id, this.imgFile).snapshotChanges()
    .subscribe(
      data => { 
        if (data && data.metadata) {
          const imagUrl = 'gs://' + data.metadata.bucket + '/' + data.metadata.fullPath;
          this.dataService.updateRecord$(this.id, {imageUrl: imagUrl});
          
          this.location.back();
        }
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
