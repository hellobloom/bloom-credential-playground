import {down} from './migrations'

if (!module.parent) {
  // down('sqlite/db.sqlite3').catch(e => {
  down().catch(e => {
    throw e
  })
}
