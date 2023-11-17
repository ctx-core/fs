import { access } from 'fs/promises'

/**
 * @param {string}path
 * @returns {Promise<boolean>}
 * @private
 */
export async function file_exists_(path) {
	try {
		await access(path)
		return true
	} catch (e) {
		return false
	}
}
export {
	file_exists_ as path__exists_
}
