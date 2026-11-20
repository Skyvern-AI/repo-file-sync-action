import assert from 'assert'

import { execCmd } from '../src/helpers.js'

const value = "argument with spaces, \"double quotes\", and 'single quotes'; $(echo not-run) && $HOME *"
const output = await execCmd(process.execPath, [ '-e', 'process.stdout.write(process.argv[1])', value ], process.cwd())

assert.strictEqual(output, value)