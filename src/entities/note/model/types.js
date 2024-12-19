/**
 * @typedef {Object} Note
 * @property {number} id - Note ID
 * @property {string} title - Note title
 * @property {boolean} completed - Note completion status
 * @property {number} userId - User ID
 */

/**
 * @typedef {Object} CreateNoteDTO
 * @property {string} title - Note title
 * @property {boolean} completed - Note completion status
 */

/**
 * @typedef {Object} UpdateNoteDTO
 * @property {string} [title] - Note title
 * @property {boolean} [completed] - Note completion status
 */