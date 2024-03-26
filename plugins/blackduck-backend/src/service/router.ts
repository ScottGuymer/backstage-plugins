import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { BlackDuckRestApi } from '../api/BlackDuckRestApi';

export interface RouterOptions {
  logger: Logger;
  config: Config;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const config = options.config.getConfig('blackduck');
  const host = config.getString('host');
  const token = config.getString('token');

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.get(
    '/risk-profile/:projectName/:projectVersion',
    async (_request, response) => {
      logger.verbose('getting vulnarabilities..');
      const { projectName, projectVersion } = _request.params;
      const blackDuck = new BlackDuckRestApi(logger, host, token);
      await blackDuck.auth();
      const risk_profile = await blackDuck.getRiskProfile(projectName, projectVersion);      
      response.json(risk_profile);
    },
  );

  router.get(
    '/vulns/:projectName/:projectVersion',
    async (_request, response) => {
      logger.verbose('getting vulnarabilities..');
      const { projectName, projectVersion } = _request.params;
      const blackDuck = new BlackDuckRestApi(logger, host, token);
      await blackDuck.auth();
      const vulns = await blackDuck.getVulnerableComponents(projectName, projectVersion);      
      response.json(vulns);
    },
  );

  router.use(errorHandler());
  return router;
}
