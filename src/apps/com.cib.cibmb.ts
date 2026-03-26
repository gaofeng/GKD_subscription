import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cib.cibmb',
  name: '兴业银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-专属客户经理弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.newland.app.ui.home.HomeActivity',
          matches: '[vid="btn_close"][visibleToUser=true][parent.childCount=2]',
          snapshotUrls: ['https://i.gkd.li/i/26272631'],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.newland.app.ui.home.HomeActivity',
          matches: '[vid="adv_alert"] > [vid="ivClose"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/26272843'],
        },
      ],
    },
  ],
});
