import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'insigma.waybook.jinan',
  name: '济南公交369出行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          activityIds: 'insigma.waybook.jinan.ui.splash.SplashActivity',
          matches: '[vid="qm_time"][visibleToUser=true]', //千米广告
          snapshotUrls: ['https://i.gkd.li/i/26165233'],
        },
      ],
    },
  ],
});
