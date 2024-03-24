import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  c.res.headers.append('Cache-Control', 'max-age=1800');
  await next();
});
