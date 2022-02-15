const logger = {
  format(level: string, msg: string) {
    return `[${level}] ${new Date().toISOString()}: ${msg}`;
  },
  log(msg?: any, ...optionalParams: any[]) {
    console.log(this.format("info", msg), ...optionalParams);
  },
  warn(msg?: any, ...optionalParams: any[]) {
    console.warn(this.format("warning", msg), ...optionalParams);
  },
  error(msg?: any, ...optionalParams: any[]) {
    console.error(this.format("error", msg), ...optionalParams);
  },
};

export default logger;
