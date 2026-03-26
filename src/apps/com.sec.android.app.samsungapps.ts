import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.samsungapps',
  name: '三星应用商店',
  groups: [
    {
      key: 1,
      name: '1开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sec.android.app.samsungapps.SamsungAppsMainActivity',
          matches: '[vid="dismiss"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/26274096'],
        },
      ],
    },
  ],
});
