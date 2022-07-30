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

  async see({nftName}) {
    console.log('what', nftName);
    axios
      .get("https://gateway.pinata.cloud/ipfs/QmQwfiCRHYXiWXjt6cYvb8npjtep9S1JARHnDfE5pngSZs")
      .then(r => console.log("r", r))
    console.log('Hey')
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

  nameChanged({nftName, event}) {
    nftName = event.target.value;
  }

  render({nftName}) {
    nftName = "hey"

    if(nftName === undefined && nftName === '') {
      return false;
    }

    return (
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-1 bg-black text-white">
          <form>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 space-y-6 sm:p-6">

                <div>
                  <label class="text-base mb-1"> Image, Video, Audio, or 3D Model*</label>
                  <p class='text-gray-400 text-sm mb-4'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </div>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm">Name *</label>
                  <input class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm ">External link</label>
                  <input class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div>
                  <label for="about" class="block text-sm mb-1"> Description </label>
                  <p class='text-gray-400 text-sm mb-4'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                  <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="mt-1 block w-full sm:text-sm bg-black h-32 border border-white" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-1 bg-black text-white">
          <form>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 space-y-6 sm:p-6">

                <div>
                  <label class="text-base mb-1"> Image, Video, Audio, or 3D Model*</label>
                  <p class='text-gray-400 text-sm mb-4'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </div>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm">Name *</label>
                  <input class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm ">External link</label>
                  <input class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div>
                  <label for="about" class="block text-sm mb-1"> Description </label>
                  <p class='text-gray-400 text-sm mb-4'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                  <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="mt-1 block w-full sm:text-sm bg-black h-32 border border-white" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>

        














        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <input type='file' id='file-input' onsubmit={(event) => console.log("submited", event)} />
        <button onclick={this.uploadFile} class='bg-blue-300 border-2'>Upload</button>
        <br />
        <button onclick={this.getValue} class='bg-blue-300 border-2'>Value</button>
        <br />
        <br />
        <button onclick={this.create} class='text-yellow-100'>Create x</button>
        <br />
        <br />*/}
        <button onclick={this.see} class='text-yellow-100'>See</button> 
      </div >
    )
  }

}

export default CreateNFTPage;