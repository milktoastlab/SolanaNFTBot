import { PinataMetadata } from '@pinata/sdk';

export interface PNFT {
  id: string | number;
  user_id: string | number;
  size: number;
  ipfs_pin_hash: string;
  date_pinned: string;
  metadata: PinataMetadata | any;
  // Note: regions/hashPinPolicy is not currently stored

}

