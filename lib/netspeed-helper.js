import _ from 'lodash';
import logger from './logger';

const NETSPEED = {
  GSM : "gsm", // GSM/CSD (up: 14.4, down: 14.4).
  SCSD: "scsd", // HSCSD (up: 14.4, down: 57.6).
  GPRS: "gprs", // GPRS (up: 28.8, down: 57.6).
  EDGE: "edge", // EDGE/EGPRS (up: 473.6, down: 473.6).
  UMTS: "umts", // UMTS/3G (up: 384.0, down: 384.0).
  HSDPA: "hsdpa", // HSDPA (up: 5760.0, down: 13,980.0).
  LTE: "lte", // LTE (up: 58,000, down: 173,000).
  EVDO: "evdo", // EVDO (up: 75,000, down: 280,000).
  FULL: "full" // No limit, the default (up: 0.0, down: 0.0).
};

function getNetspeed (n) {
  if (!_.isUndefined(NETSPEED[n])) {
    return NETSPEED[n];
  }
  logger.warn(`Invalid netspeed suplied ${n}, possible values: ${JSON.stringify(NETSPEED)}`);
  return NETSPEED.FULL;
}

export default { NETSPEED, getNetspeed };
