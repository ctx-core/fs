import { tempfile_path_ } from '@ctx-core/tempfile'
import { unlink, writeFile } from 'fs/promises'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { file_exists_, file_exists__waitfor } from './index.js'
test('file_exists_ + file_exists__waitfor', async ()=>{
	const tempfile_path = await tempfile_path_()
	equal(await file_exists_(tempfile_path), false)
	await writeFile(tempfile_path, 'test content')
	try {
		await file_exists__waitfor(tempfile_path)
		equal(await file_exists_(tempfile_path), true)
	} finally {
		await unlink(tempfile_path)
	}
})
test.run()
