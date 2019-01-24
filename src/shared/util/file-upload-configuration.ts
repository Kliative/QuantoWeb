export class FileUploadConfiguration {

    private static _ACCEPTED_FILE_TYPES = '.png, .tiff, .bmp, .jpeg, .jpg, .xls, .xlsx, .txt, .pdf, .docx, .doc, .msg, .eml';

    static get acceptedFileTypes(): string {
        return this._ACCEPTED_FILE_TYPES;
    }
}
