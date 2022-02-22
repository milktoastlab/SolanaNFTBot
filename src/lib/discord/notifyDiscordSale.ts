import { PNFT } from "@/lib/pinata/types";
import Discord, { MessageEmbed, TextChannel } from "discord.js";
import {DEFAULTS} from '@/globals';
import {readDatePinned, readUserName, readTicketName, readTicketStatus, readTicketType, generateTicketDetailLink, formatBylineTicketDatetime}  from '@/lib/pinata/pnftInteractions'


export function generateTicketDescription(ticket: PNFT){
  /* Input: Takes in a ticket (pinata NFT metadata)
     Output: A description to put in discord channel with relevant info
  */

     return `This ${readTicketStatus(ticket)} ${readTicketType(ticket)} ticket was asked by user: ${readUserName(ticket)} ${formatBylineTicketDatetime(readDatePinned(ticket))}`

}

export default async function notifyDiscordSale(
    client: Discord.Client,
    channel: TextChannel,
    newOpenTickets: Array<PNFT>,
    test?: boolean
  ) {

   // TODO: replace with full domain once finalized
   const appUrl = DEFAULTS.APP_URL
  
    if (!client.isReady()) {
        console.log("Client was not ready;")
        return;
      }

      for (let ticket of newOpenTickets){

        let ticketDetailLink = generateTicketDetailLink(ticket, appUrl);
        try {
          const description = `GM NEED HELP! New Ticket`;
    
          const embedMsg = new MessageEmbed({
            color: "#0099ff",
            title: readTicketName(ticket),
            description: generateTicketDescription(ticket),
            url: ticketDetailLink
          });

      
          await channel.send({
            embeds: [embedMsg],
          });
          const logMsg = `Notified discord #${channel.name}: ${description}`;
          console.log(logMsg);
          
        } catch (error) {
          console.log("The following error occurred while trying to notify discord about this ticket: ", ticketDetailLink)
          console.log("Error: ", error)
        }
        
      }
      

}