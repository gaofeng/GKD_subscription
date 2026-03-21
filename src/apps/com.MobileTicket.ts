import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '[vid="tv_main_splash_skip" || vid="tv_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9a9b71b2-0c52-4623-b53b-6dd07d0cbe7c',
          snapshotUrls: [
            'https://i.gkd.li/i/26157098', //https://github.com/gaofeng/GKD_subscription/issues/1#issuecomment-4102982486
          ],
        },
      ],
    },
    {
      key: 1,
      name: '开启微信支付宝通知',
      rules: [
        {
          fastQuery: true,
          actionDelay: 2000,
          activityIds: 'com.MobileTicket.ui.activity.MainActivity',
          matches: '[vid="iv_notification_close"]',
        },
      ],
    },
  ],
});
