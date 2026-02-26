require('dotenv').config();

const PORT = parseInt(process.env.PORT || '9999', 10);
const RATE_LIMIT = parseInt(process.env.RATE_LIMIT || '60', 10);
const BODY_LIMIT = process.env.BODY_LIMIT || '1mb';
const ALLOWED_IPS = process.env.ALLOWED_IPS ? process.env.ALLOWED_IPS.split(',') : [];
const API_TOKEN = process.env.API_TOKEN || null;
const ALERT_SOUND = process.env.ALERT_SOUND || 'Glass';
const ALERT_VOLUME = process.env.ALERT_VOLUME || '1';

const COLORS = {
  RESET: '\x1b[0m',
  CYAN: '\x1b[36m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  RED: '\x1b[31m',
  MAGENTA: '\x1b[35m',
  DIM: '\x1b[2m',
  BLUE: '\x1b[34m',
};

module.exports = {
  PORT,
  RATE_LIMIT,
  BODY_LIMIT,
  ALLOWED_IPS,
  API_TOKEN,
  ALERT_SOUND,
  ALERT_VOLUME,
  COLORS,
};
