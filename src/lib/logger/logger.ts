const logger = {
  prefix(level: string) {
    return `[${level}] ${new Date().toISOString()}:`;
  },
  log(msg?: any, ...optionalParams: any[]) {
    console.log(this.prefix("info"), msg, ...optionalParams);
  },
  warn(msg?: any, ...optionalParams: any[]) {
    console.warn(this.prefix("warning"), msg, ...optionalParams);
  },
  error(msg?: any, ...optionalParams: any[]) {
    console.error(this.prefix("error"), msg, ...optionalParams);
  },
};

export default logger;
