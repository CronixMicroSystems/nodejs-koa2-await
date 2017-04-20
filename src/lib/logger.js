import { Bristol } from 'bristol'
import palin from 'palin'

const logger = new Bristol()
logger.addTarget('console').withFormatter(palin, {
  rootFolderName: 'nodejs-koa2-await' // Edit this to match your actual foldername
})

export default logger
