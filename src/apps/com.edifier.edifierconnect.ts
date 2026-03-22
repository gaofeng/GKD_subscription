import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.edifier.edifierconnect',
  name: 'EDIFIER Connect',
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
          activityIds:
            'com.edifier.edifierconnect.page.common.launcher.LauncherAc',
          matches: '[vid="tvSkip"][text="跳过"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/26165329'],
        },
      ],
    },
  ],
});
