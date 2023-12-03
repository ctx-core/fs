import { waitfor } from 'ctx-core/function'
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
/**
 * @param {string}path
 * @param {number}[timeout]
 * @param {number}[period]
 * @returns {Promise<void>}
 */
export function file_exists__waitfor(path, timeout = 5000, period = 0) {
	return waitfor(path, timeout, period)
}
