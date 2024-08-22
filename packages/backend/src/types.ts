import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { PluginCacheManager, TokenManager } from '@backstage/backend-common';
import { PermissionEvaluator } from '@backstage/plugin-permission-common';
import { IdentityApi } from '@backstage/plugin-auth-node';
import {
  DatabaseService,
  DiscoveryService,
  SchedulerService,
  UrlReaderService,
} from '@backstage/backend-plugin-api';

export type PluginEnvironment = {
  logger: Logger;
  database: DatabaseService;
  cache: PluginCacheManager;
  config: Config;
  reader: UrlReaderService;
  discovery: DiscoveryService;
  tokenManager: TokenManager;
  scheduler: SchedulerService;
  permissions: PermissionEvaluator;
  identity: IdentityApi;
};
