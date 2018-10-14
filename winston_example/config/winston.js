const winston = require("winston");

module.exports = function() {
  return function(req, res, next) {
    const logger = winston.createLogger({
      //   levels: winston.config.syslog.levels,

      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp()
        // winston.format.logstash()
      ),

      transports: [
        new winston.transports.Console({
          level: "debug",
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.cli()
            // winston.format.printf(
            //   info => `(${info.timestamp})${info.level}:\t${info.message}\t ${req.ip}:${req.hostname}`
            // )
          )
        }),
        new winston.transports.File({
          filename: "error.log",
          level: "error"
        })
      ],

      exceptionHandlers: [
        new winston.transports.File({
          filename: "exception.log",
          level: "debug"
        })
      ],

      exitOnError: false
    });

    /* for syslog levels */
    // logger.emerg("Emergency log");
    // logger.alert("Alert log");
    // logger.crit("Critical log");
    // logger.error("Error log");
    // logger.warning("Warning log");
    // logger.notice("Notice log");
    // logger.info("Information log");
    // logger.debug("Debug log");

    /* for npm levels */
    logger.error("Error log");
    logger.warn("Warn log");
    logger.info("Info log");
    logger.verbose("Verbose log");
    logger.debug("Debug log");
    logger.silly("Silly log");

    next();
  };
};
