/**
 * courier router
 */

import { factories } from '@strapi/strapi';

export default {
    routes: [
      // Custom route for finding courier by userId
      {
        method: 'GET',
        path: '/couriers/user/:userId',
        handler: 'api::courier.courier.findByUserId',  // Correct handler path
        config: {
          auth: false,  // Set to true if authentication is required
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/couriers',
        handler: 'courier.find',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/couriers/:id',
        handler: 'courier.findOne',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'POST',
        path: '/couriers',
        handler: 'courier.create',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/couriers/:id',
        handler: 'courier.update',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/couriers/:id',
        handler: 'courier.delete',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
    ],
  };