import Nullstack from 'nullstack';
// import * as dotenv from 'dotenv';
import axios from 'axios';

// dotenv.config();

class CreateNFTPage extends Nullstack {
  
  pinataUrl = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
  
  async create() {
    const json = {
      name: "test",
      url: "url"
    }
    axios
      .post(url, json, {
        headers: {
          pinata_api_key: "78595d21bceb6ce847cb",
          pinata_secret_api_key: "2e22599f566abf5c8fd8f8a43a36a350632b0d9d0ceeaf9caa289e3dac38ab1b",
        }
      })
      .then(r => console.log("successs", r))
      .catch(error => console.log("error", error))
  }

  async see() {
    axios
      .get("https://gateway.pinata.cloud/ipfs/QmQwfiCRHYXiWXjt6cYvb8npjtep9S1JARHnDfE5pngSZs")
      .then(r => console.log("r", r))
  }

  uploadFile() {
    window.document.getElementById('file-input').click();
    console.log('alo')
  }

  getValue() {
    const formData = new FormData();
    const file = window.document.getElementById('file-input').files[0]
    console.log(file);
    formData.append('file', file);
    const endpoint = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    fetch(endpoint, {
      method: 'post',
      body: formData,
      headers: {
        pinata_api_key: "78595d21bceb6ce847cb",
          pinata_secret_api_key: "2e22599f566abf5c8fd8f8a43a36a350632b0d9d0ceeaf9caa289e3dac38ab1b",
      }
    })
      .then(r => console.log('success', r))
      .catch(r => console.log('failure', r));

    // https://api.pinata.cloud/pinning/pinFileToIPFS
    // fetch("https://gateway.pinata.cloud/ipfs/QmdkYfjs8dKm9xY6hc41Mc4k3PAhKru1kxnsa2V8a319c5", {method: 'GET'});
  }

  render() {
    return (
      <div>
        <input type='file' id='file-input' onsubmit={(event) => console.log("submited", event)}/>
        <button onclick={this.uploadFile } class='bg-blue-300 border-2'>Upload</button>
        <br />
        <button onclick={this.getValue } class='bg-blue-300 border-2'>Value</button>
        <br />
        <br />
        <button onclick={this.create} class='text-yellow-100'>Create x</button>
        <br />
        <br />
        <button onclick={this.see} class='text-yellow-100'>See</button>
      </div>
    )
  }

}

export default CreateNFTPage;