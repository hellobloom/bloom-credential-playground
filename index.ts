import * as path from 'path'
import * as fs from 'fs'

// used for development
if (fs.existsSync(path.join(__dirname, '.env'))) {
  require('dotenv').config({path: path.join(__dirname, '.env')})
} else {
  require('dotenv').config({path: path.join(__dirname, '../.env')})
}

import {cli} from './src/commands/root'

process.on('unhandledRejection', error => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
})

cli()
