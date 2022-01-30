export default function truncateForAddress(str: String): string {
  return str.substring(0, 6) + "..." + str.substring(str.length - 6);
}
