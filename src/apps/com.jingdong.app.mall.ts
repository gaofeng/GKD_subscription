import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16323111',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
        {
          key: 1,
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17602356', // "跳过" 节点不支持fastQuery
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-购物车页面砸金蛋',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14731003',
        },
      ],
    },
  ],
});
