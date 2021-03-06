import * as express from 'express'

import withoutAuthentication from './utils/without-authentication'

const router = express.Router()

export default router

router.get(
  '/:app?',
  withoutAuthentication(async (req, res, next) => {
    const app = req.params['app']
    const env = req.app.get('env')

    const config = {
      app,
      env,
      loginUrl: env === 'development' ? 'http://localhost:4000/auth/login/' : env === 'production' ? 'https://ahs502.ir/auth/login/' : undefined
    }

    const configurer = `
      ;
      (function () {
        window.config = ${JSON.stringify(config, null, 2)};
      })();
      ;
    `

    res.status(200).header('Content-Type', 'application/javascript; charset=UTF-8').send(configurer).end()
  })
)
