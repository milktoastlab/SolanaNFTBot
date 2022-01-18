import pinataSDK, { PinataClient, PinataPinListResponse, PinataPinListResponseRow } from '@pinata/sdk';
import FormData from 'form-data';
import axios from 'axios';
import { PublicKey } from '@solana/web3.js';
import { PNFT } from '@/lib/pinata/types';
import {DEFAULTS} from '@/globals'
const apiKey = DEFAULTS.PINATA_API_KEY;
const apiSecret = DEFAULTS.PINATA_API_SECRET;
 

export default function usePinata() {
  const pinata = pinataSDK(apiKey, apiSecret);

  const uploadImg = async (blob: Blob, walletAddr: PublicKey): Promise<string> => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    const data = new FormData();
    data.append('file', blob);

    const metadata = JSON.stringify({
      name: `${walletAddr.toBase58()}.png`,
    });
    data.append('pinataMetadata', metadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    data.append('pinataOptions', pinataOptions);

    const res = await axios.post(url, data, {
      maxBodyLength: 'Infinity' as any, // this is needed to prevent axios from erroring out with large files
      headers: {
        // @ts-ignore
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: apiKey,
        pinata_secret_api_key: apiSecret,
      },
    });
    return res.data.IpfsHash;
  };

  const hashToURI = (hash: string) => `https://gateway.pinata.cloud/ipfs/${hash}`;

  const URIToHash = (uri: string) => uri.substring(uri.lastIndexOf("/") + 1, uri.length);

  /*  const uploadJSON = async (imgIpfsHash: string, walletAddr: PublicKey) => {
      return uploadJSONWithDescription(imgIpfsHash, walletAddr, "description");
    }; */

  const uploadJSON = async (imgIpfsHash: string, walletAddr: PublicKey, title: string) => {
    const metadata = {
      name: 'HelpDesk Ticket',
      symbol: 'HELPv1',
      description: title,
      seller_fee_basis_points: 0,
      image: hashToURI(imgIpfsHash),
      properties: {
        category: 'image',
        files: [
          {
            uri: hashToURI(imgIpfsHash),
            type: 'image/png',
          },
        ],
        creators: [
          {
            address: walletAddr.toBase58(),
            share: 100,
          },
        ],
      },
    };

    const options = {
      pinataMetadata: {
        name: title,
        keyvalues: {
          'ticket_type': 'question',
          'status': 'open'
        }
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };
    const res = await pinata.pinJSONToIPFS(metadata, options as any);
    return res.IpfsHash;
  };


  const uploadJSONForAnswer = async (imgIpfsHash: string, walletAddr: PublicKey, title: string, questionID: string) => {
    const metadata = {
      name: 'HelpDesk Response',
      symbol: 'HELPv1',
      description: title,
      seller_fee_basis_points: 0,
      image: hashToURI(imgIpfsHash),
      properties: {
        category: 'image',
        files: [
          {
            uri: hashToURI(imgIpfsHash),
            type: 'image/png',
          },
        ],
        creators: [
          {
            address: walletAddr.toBase58(),
            share: 100,
          },
        ],
      },
    };

    const options = {
      pinataMetadata: {
        name: title,
        keyvalues: {
          'ticket_type': 'answer',
          'questionMintId': questionID,
        }
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };
    const res = await pinata.pinJSONToIPFS(metadata, options as any);
    return res.IpfsHash;
  };

  const retrieveOpenTickets =  async(pinataAPIFilters?: any) => {
    /* Search Pinata account for open NTF tickets & 
       preprocess retrieved metadata by saving as PNFT objects.
       Input: Optional configurable filter parameters as needed
    */

    const pinata_result_rows = (await retrieveOpenTicketsResultRows(pinataAPIFilters))
    const pnfts = (await convertTicketsToPNFTs(pinata_result_rows))
    return pnfts
  };

  const retrieveOpenTicketsResultCount = async(pinataAPIFilters?: any ) => {
    /* Search Pinata account for open NTF tickets and return count
       Input: Optional configurable filter parameters as needed

    */
    const pinata_result = (await searchForOpenTickets(pinataAPIFilters))
    console.log("pinata result is", pinata_result)
    return pinata_result.count
  }

  const retrieveOpenTicketsResultRows =  async(pinataAPIFilters?: any) => {
    /* Search Pinata account for open NTF tickets using metadata filter
       & return result rows
       Input: Optional configurable filter parameters as needed

    */
    const pinata_result = (await searchForOpenTickets(pinataAPIFilters))
    return pinata_result.rows
  };


  const searchForOpenTickets =  async(pinataAPIFilters?: any ) => {
    /* Search Pinata account for open NTF tickets using metadata filter
      Input: Optional configurable filter parameters as needed

    */
    const metadataFilter = {
      keyvalues: {
        ticket_type: {
              value: 'question',
              op: 'eq'
          },
          status: {
            value: 'open',
            op: 'eq'
        },
      },

    
    
    };

    // merge passed input filters with metadataFilter
    const filters: any = {
      ...pinataAPIFilters,
      status : 'pinned',
      pageLimit: 25,
      pageOffset: 0,
      metadata: metadataFilter,
    };
    
    const pinataResult = (await pinata.pinList(filters));

    return pinataResult
  };

  async function convertTicketsToPNFTs(tokens: PinataPinListResponseRow[]): Promise<PNFT[]> {
    /* Convert tickets from Pinata search by cross-mapping data to new objects in memory
       Takes PinataPinListResponseRow[] ----> PNFT
    */
    return Promise.all(tokens.map(async (t) =>
        ({
          id: t.id,
          user_id: t.user_id,
          size: t.size,
          ipfs_pin_hash: t.ipfs_pin_hash,
          date_pinned: t.date_pinned,
          metadata: t.metadata,
        })
      )
    
    )
  }

  const updatePinataMetadata = async(ipfsHash: string, metaDataHash: {}) => {
    
    pinata.hashMetadata(ipfsHash, metaDataHash).then((result) => {
      //handle results here
        console.log(result);
      }).catch((err) => {
      //handle error here
      console.log(err);
    });
  };




  return {
    uploadImg,
    uploadJSON,
    hashToURI,
    URIToHash,
    uploadJSONForAnswer,
    searchForOpenTickets,
    updatePinataMetadata,
    convertTicketsToPNFTs,
    retrieveOpenTickets,
    retrieveOpenTicketsResultCount,
    retrieveOpenTicketsResultRows
  };
}

usePinata();