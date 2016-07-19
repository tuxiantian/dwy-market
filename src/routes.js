import MainView from './views/Main'
import HomeView from './views/HomeView'
import SearchView from './views/SearchView'
import CategoryListView from './views/CategoryListView'
import ShoppingCartView from './views/ShoppingCartView'
import OrderListView from './views/OrderListView'
import OrderDetailView from './views/OrderDetailView'
import PersonalView from './views/PersonalView'
import ProductListView from './views/ProductListView'
import ProductDetailView from './views/ProductDetailView'



/**
 * 登录
 * @type {String}
 */
export const ROUTE_LOGIN = 'login';

/**
 * 首页
 * @type {String}
 */
export const ROUTE_HOME = 'home';

/**
 * 搜索页
 * @type {String}
 */
export const ROUTE_SEARCH = 'search';

/**
 * 产品分类列表
 * @type {String}
 */
export const ROUTE_CATEGORY_LIST = 'categories';

/**
 * 购物车
 * @type {String}
 */
export const ROUTE_SHOPPING_CART = 'shoppingCart';

/**
 * 关于我
 * @type {String}
 */
export const ROUTE_ME = 'me';

/**
 * 收货人信息
 * @type {String}
 */
export const ROUTE_CONSIGNEE_INFO = 'consigneeInfo';

/**
 * 提现
 * @type {String}
 */
export const ROUTE_CASH = 'cash';

/**
 * 我的二维码
 * @type {String}
 */
export const ROUTE_QR_CODE = 'QRCode';

/**
 * 我的奖励
 * @type {String}
 */
export const ROUTE_BONUS = 'bonus';

/**
 * 我的粉丝
 * @type {String}
 */
export const ROUTE_FANS = 'fans';

/**
 * 订单列表
 * @type {String}
 */
export const ROUTE_ORDER_LIST = 'orders';

/**
 * 订单详情
 * @type {String}
 */
export const ROUTE_ORDER_DETAIL = 'orderDetail';

/**
 * 订单确认表单
 * @type {String}
 */
export const ROUTE_ORDER_FORM = 'orderForm';

/**
 * 产品列表
 * @type {String}
 */
export const ROUTE_PRODUCT_LIST = 'products';

/**
 * 产品详情
 * @type {String}
 */
export const ROUTE_PRODUCT_DETAIL = 'productDetail';

/**
 * 路由配置
 */
export default {
  '/': {
    component: {
      template: `<div><router-view keep-alive transition="fade"></router-view></div>`
    },
    subRoutes: {
      '/': {
        component: MainView,
        subRoutes: {
          '/home': {
            name: ROUTE_HOME,
            component: HomeView
          },
          '/categories': {
            name: ROUTE_CATEGORY_LIST,
            component: CategoryListView
          },
          '/shopping-cart': {
            name: ROUTE_SHOPPING_CART,
            component: ShoppingCartView
          },
          '/orders': {
            name: ROUTE_ORDER_LIST,
            component: OrderListView
          },
          '/me': {
            name: ROUTE_ME,
            component: PersonalView
          }
        }
      },
      '/products': {
        name: ROUTE_PRODUCT_LIST,
        component: ProductListView
      },
      '/products/:id': {
        name: ROUTE_PRODUCT_DETAIL,
        component: ProductDetailView
      },
      '/orders/:id': {
        name: ROUTE_ORDER_DETAIL,
        component: OrderDetailView
      },
      '/search': {
        name: ROUTE_SEARCH,
        component: SearchView
      }
    }
  },
  '/login': {
    component: {}
  },
  '*': {
    component: {
      template: `<div>404</div>`
    }
  }
}
