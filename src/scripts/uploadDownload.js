import React, {Component} from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table'; 

class UploadDownload extends Component {
    constructor(props){
        super(props);
        this.state = {
            csvData:''
        }
    };

    handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({
                csvData: reader.result
            })
        }
        reader.readAsText(files[0]);
    }
}

export default UploadDownload;

