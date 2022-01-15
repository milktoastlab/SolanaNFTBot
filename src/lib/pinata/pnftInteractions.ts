import { PNFT } from '@/lib/pinata/types';

export function generateTicketDetailLink(ticket: PNFT, appUrl?: string)  {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: link to ticket detail page using mintID or undefined (some tickets may not have mintID)
    */
       const appUrlPrefix =  typeof appUrl != undefined ? appUrl : ""
       const ticketPageEndpoint = "/ticketdetail/"
       const attr_key = "mintId"
       let attr = ticket.metadata.keyvalues.hasOwnProperty(attr_key) ? ticket.metadata.keyvalues[attr_key] : undefined
       return typeof attr != 'undefined' ? appUrlPrefix + ticketPageEndpoint + attr : undefined
  }
  
  export function readTicketName (ticket: PNFT) {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: reads ticket name from metadata or undefined (some tickets may not have a name)
    */
     const attr_key = 'name'
     let attr = ticket.metadata.hasOwnProperty(attr_key) ? ticket.metadata[attr_key] : undefined
     return typeof attr != 'undefined' ? attr : "Attribute Not Set"
  };
  
  export function readTicketStatus (ticket: PNFT) {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: reads ticket status from metadata or undefined
    */
     const attr_key = 'status'
     let attr = ticket.metadata.keyvalues.hasOwnProperty(attr_key) ? ticket.metadata.keyvalues[attr_key] : undefined
     return typeof attr != 'undefined' ? attr : "Attribute Not Set"
  };
  export function readTicketType (ticket: PNFT) {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: reads ticket status from metadata or undefined
    */
     const attr_key = 'ticket_type'
     let attr = ticket.metadata.keyvalues.hasOwnProperty(attr_key) ? ticket.metadata.keyvalues[attr_key] : undefined
     return typeof attr != 'undefined' ? attr : "Attribute Not Set"
  };
  export function readMintID (ticket: PNFT) {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: reads ticket mint ID from metadata or undefined
    */
     const attr_key = 'mintId'
     let attr = ticket.metadata.keyvalues.hasOwnProperty(attr_key) ? ticket.metadata.keyvalues[attr_key] : undefined
     return typeof attr != 'undefined' ? attr : "Attribute Not Set"
  };
  export function readUserID (ticket: PNFT) {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: reads ticket user ID from metadata or undefined
    */
     const attr_key = 'user_id'
     let attr = ticket.hasOwnProperty(attr_key) ? ticket[attr_key] : undefined
     return typeof attr != 'undefined' ? attr : "Attribute Not Set"
  };
  export function readDatePinned (ticket: PNFT) {
    /* Input: Takes in a ticket (pinata NFT metadata)
       Output: reads ticket date pinned to pinata from metadata or undefined
    */
     const attr_key = 'date_pinned'
     let attr = ticket.hasOwnProperty(attr_key) ? ticket[attr_key] : undefined
     return typeof attr != 'undefined' ? attr : "Attribute Not Set"
  };