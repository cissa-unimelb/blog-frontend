import axios from 'axios';

class UploadAdapter {
  constructor(loader, authorName, titleName) {
      this.loader = loader
      this.authorName = authorName
      this.titleName = titleName
  }
  upload() {
      return this.loader.file.then(
          (file, authorName, titleName) =>
              new Promise((resolve, reject) => {
                
                // Use own image database
                var forms = new FormData()
                var configs = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                forms.append('file',file)      
                forms.append('authorName', this.authorName)      
                forms.append('titleName', this.titleName)      
                axios.post('http://127.0.0.1:5000/up_photo',forms,configs).then(res=>{
                    console.log(res)
                    resolve({
                        default: res.data.downloadURL
                    })
                })
              })
      )
  }
}

export default UploadAdapter