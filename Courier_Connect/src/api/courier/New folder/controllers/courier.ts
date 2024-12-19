/**
 * courier controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::courier.courier', ({ strapi }) => ({
    async findByUserId(ctx) {
      const { userId } = ctx.params;
  
      // Query the database for the courier by userId
      const courier = await strapi.db.query('api::courier.courier').findOne({
        where: { userId: userId },
      });
  
      if (!courier) {
        return ctx.notFound(`Courier with userId ${userId} not found`);
      }
  
      // Return the found courier data
      return courier;
    },
  }));