import { Component, Input } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent {
    @Input() multiple: boolean = false;
    @Input() accept: string = 'image/jpeg,image/jpg';
    @Input() maxFileSize: number = 5000000;
    @Input() disabled = false;
    @Input() processDirectoryDrop = false;
    files: File[] = [
        {
            lastModified: 1654248354345,
            name: 'kisspng-vector-graphics-illustration-image-portable-networ-staffing-and-recruiting-simploy-5bfd191305cfa9.4715228815433136830238.jpg',
            size: 99905,
            type: 'image/jpeg',
            webkitRelativePath: '',
        } as File,
    ];
    constructor() {}

    onSelect(event: NgxDropzoneChangeEvent) {
        console.log(event);
        this.files.push(...event.addedFiles);
        this.readFile(this.files[0]).then((fileContents) => {
            // Put this string in a request body to upload it to an API.
            console.log(fileContents);
        });
    }

    onRemove(event: any) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }

    private async readFile(file: File): Promise<string | ArrayBuffer> {
        return new Promise<string | ArrayBuffer>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                return resolve((e.target as FileReader).result as string | ArrayBuffer);
            };

            reader.onerror = (e) => {
                console.error(`FileReader failed on file ${file.name}.`);
                return reject(null);
            };

            if (!file) {
                console.error('No file to read.');
                return reject(null);
            }

            reader.readAsDataURL(file);
        });
    }
}
