export const API_SERVER = 'http://shop.yunwalker.cn'
export const API_PATH = '/shop/api/v1'
export const PAGE = 1;
export const PAGE_SIZE = 3;
export const IMAGE_WIDTH_HEIGHT_RATIO = 4 / 3;
export const DEF_USER = 10086;

export const PULLUP_CONFIG = {
  content: '上拉加载更多',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: '松开进行加载',
  upContent: '上拉加载更多',
  loadingContent: '加载中...'
};

export const TOAST_CONFIG = {
  show: false,
  type: 'success',
  content: ''
};

export const ALERT_CONFIG = {
  show: false,
  title: '提示',
  content: '',
  buttonText: '确定',
  onShow: noop,
  onHide: noop
};

export const CONFIRM_CONFIG = {
  show: false,
  title: '',
  content: '',
  cancelText: '取消',
  confirmText: '确认',
  onCancel: noop,
  onConfirm: noop
};

function noop() {

}
