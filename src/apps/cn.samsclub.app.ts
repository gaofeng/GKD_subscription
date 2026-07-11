import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.samsclub.app',
  name: '山姆会员商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: [
            '[vid="lottie_view"][visibleToUser=true]',
            '[vid="close_view"][visibleToUser=true]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/15879369'],
        },
      ],
    },
  ],
});
