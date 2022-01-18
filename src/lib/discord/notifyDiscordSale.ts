import { PNFT } from "@/lib/pinata/types";
import Discord, { MessageEmbed, TextChannel } from "discord.js";

import {readDatePinned, readUserID, readMintID, readTicketName, readTicketStatus, readTicketType, generateTicketDetailLink}  from '@/lib/pinata/pnftInteractions'


export function generateTicketDescription(ticket: PNFT){
  /* Input: Takes in a ticket (pinata NFT metadata)
     Output: A description to put in discord channel with relevant info
  */

     return `This ${readTicketStatus(ticket)} ${readTicketType(ticket)} ticket was asked by user: ${readUserID(ticket)} on ${readDatePinned(ticket)}`

}

export default async function notifyDiscordSale(
    client: Discord.Client,
    channel: TextChannel,
    newOpenTickets: Array<PNFT>,
    test?: boolean
  ) {

   // TODO: replace with full domain once finalized
   const appUrl = "https://helpdesk-mlg49xt4w-helpdeskxyz.vercel.app/"
    if (!client.isReady()) {
        return;
      }
      for (let ticket of newOpenTickets){
        const description = `GM NEED HELP! New Ticket`;
    
        const embedMsg = new MessageEmbed({
          color: "#0099ff",
          title: readTicketName(ticket),
          description: generateTicketDescription(ticket),
          url: generateTicketDetailLink(ticket, appUrl)
        });

      
        await channel.send({
          embeds: [embedMsg],
        });
        const logMsg = `Notified discord #${channel.name}: ${description}`;
        console.log(logMsg);
      }
      

}