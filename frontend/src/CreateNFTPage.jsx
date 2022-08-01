import Nullstack from 'nullstack';
import axios from 'axios';
import { ethers } from "ethers";

import { abi as SIDE_A_ABI } from "../public/SideAStarvingNFT.json";

// import * as dotenv from 'dotenv';
// dotenv.config();

class CreateNFTPage extends Nullstack {

  pinataUrl = 'https://api.pinata.cloud/pinning';
  headers = {
    pinata_api_key: "78595d21bceb6ce847cb",
    pinata_secret_api_key: "2e22599f566abf5c8fd8f8a43a36a350632b0d9d0ceeaf9caa289e3dac38ab1b",
  }

  nameSideA = '';
  nameSideB = '';
  externalLinkSideA = '';
  externalLinkSideB = '';
  descriptionSideA = '';
  descriptionSideB = '';

  uploadFileA() {
    window.document.getElementById(`file-A-input`).click();
  }

  uploadFileB() {
    window.document.getElementById(`file-B-input`).click();
  }

  async pinFileToIPFS({ side }) {
    const file = window.document.getElementById(`file-${side}-input`).files[0];
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.pinataUrl}/pinFileToIPFS`;
    const headers = this.headers;
    const response = await axios.post(url, formData, { headers });
    return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  }

  async pinJsonToIPFS({ json }) {
    const url = `${this.pinataUrl}/pinJsonToIPFS`;
    const headers = this.headers;
    const response = await axios.post(url, json, { headers });
    return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  }

  async onCreateNFT({userAddress}) {
    const urlFileSideA = await this.pinFileToIPFS({ side: 'A' });
    const urlFileSideB = await this.pinFileToIPFS({ side: 'B' });
    
    const sideAJson = {
      name: this.nameSideA,
      externalLink: this.externalLinkSideA,
      description: this.descriptionSideA,
      image: urlFileSideA
    }

    const sideBJson = {
      name: this.nameSideB,
      externalLink: this.externalLinkSideB,
      description: this.descriptionSideB,
      image: urlFileSideB
    }

    const jsonUrlSideA = await this.pinJsonToIPFS({ json: sideAJson });
    const jsonUrlSideB = await this.pinJsonToIPFS({ json: sideBJson });
  
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const sideAContract = new ethers.Contract('0xBD62eF39e6d0952CbF01Cb747f98BF9C9F797509', SIDE_A_ABI, provider);

    const sideAContractWithSigner = sideAContract.connect(provider.getSigner());
    const transaction = await sideAContractWithSigner.mint(userAddress, jsonUrlSideA, jsonUrlSideB);
  }

  render() {
    return (
      <div class="md:grid md:grid-cols-2 md:gap-6 bg-black text-white">
        <div class="mt-5 md:mt-0 md:col-span-1">
          <div>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="space-y-6 p-6">

                <div>
                  <label class="text-base mb-1">Image, Video, Audio, or 3D Model*</label>
                  <p class='text-gray-400 text-sm mb-4'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                  <input id="file-A-input" type="file" onsubmit={this.onSubmitFileA} hidden='hidden' />
                  <div onclick={this.uploadFileA} class="cursor-pointer mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm">Name *</label>
                  <input bind={this.nameSideA} value={this.nameSideA} class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm ">External link</label>
                  <input bind={this.externalLinkSideA} value={this.externalLinkSideA} class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div>
                  <label for="about" class="block text-sm mb-1"> Description </label>
                  <p class='text-gray-400 text-sm mb-4'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                  <div class="mt-1">
                    <textarea bind={this.descriptionSideA} value={this.descriptionSideA} class="mt-1 block w-full sm:text-sm bg-black h-32 border border-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-1">
          <div>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="space-y-6 p-6">

                <div>
                  <label class="text-base mb-1">Image, Video, Audio, or 3D Model*</label>
                  <p class='text-gray-400 text-sm mb-4'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                  <input id="file-B-input" type="file" class="sr-only" />
                  <div onclick={this.uploadFileB} class="cursor-pointer mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm">Name *</label>
                  <input bind={this.nameSideB} value={this.nameSideB} class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div class="col-span-6 sm:col-span-3 text-base">
                  <label for="first-name" class="block text-sm ">External link</label>
                  <input bind={this.externalLinkSideB} value={this.externalLinkSideB} class="mt-1 block w-full sm:text-sm bg-black border border-white h-10" />
                </div>

                <div>
                  <label for="about" class="block text-sm mb-1"> Description </label>
                  <p class='text-gray-400 text-sm mb-4'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                  <div class="mt-1">
                    <textarea bind={this.descriptionSideB} value={this.descriptionSideB} class="mt-1 block w-full sm:text-sm bg-black h-32 border border-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='p-6'>
          <button onclick={this.onCreateNFT} class="inline-flex justify-start py-2 px-4 font-bold text-black bg-yellow-400 hover:bg-yellow-500">
            Create NFT
          </button>
        </div>
      </div >
    )
  }

}

export default CreateNFTPage;