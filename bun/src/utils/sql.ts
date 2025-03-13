import { SQL } from 'bun'

export const sql = new SQL({
  url: 'postgres://root:root@localhost:5432/memorize'
})