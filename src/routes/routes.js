import config from '~/config';
import pages from '~/pages';
const publicRoutes = [
    {
        path: config.routes.dashboard,
        component: pages.dashboard,
    },
    {
        path: config.routes.profile,
        component: pages.profile,
    },
    {
        path: config.routes.ecommerce.management,
        component: pages.ecommerce.management,
    },
    {
        path: config.routes.ecommerce.grid,
        component: pages.ecommerce.grid,
    },
    {
        path: config.routes.ecommerce.page,
        component: pages.ecommerce.page,
    },
    {
        path: config.routes.user.list,
        component: pages.user.list,
    },
    {
        path: config.routes.user.add,
        component: pages.user.add,
    },
    {
        path: config.routes.user.edit,
        component: pages.user.edit,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
