import Dashboard from './Dashboard';
import Profile from './Profile';
import * as ecommerce from './Ecommerce';
import * as user from './User';
const pages = {
    dashboard: Dashboard,
    profile: Profile,
    ecommerce: {
        management: ecommerce.ProductManagement,
        grid: ecommerce.ProductGrid,
        page: ecommerce.ProductPage,
    },
    user: {
        list: user.List,
        add: user.Add,
        edit: user.Edit,
    },
};
export default pages;
