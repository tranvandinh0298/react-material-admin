import config from '~/config';
import pages from '~/pages';
const publicRoutes = [
    {
        path: config.routes.dashboard,
        component: pages.dashboard,
        icon: '',
    },
    {
        path: config.routes.profile,
        component: pages.profile,
        icon: '',
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
