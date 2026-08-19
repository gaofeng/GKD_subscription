import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '功能-自动备份引导弹窗',
      desc: '点击暂不开启',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.baidu.netdisk.audio.ui.AudioPlayerActivity',
          matches: '[vid="not_open"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/29927236'],
        },
      ],
    },
    {
      key: 13,
      name: '分段广告-暂不开启自动备份',
      fastQuery: true,
      activityIds: [
        '.ui.NewQuickSettingsActivity',
        '.ui.RepeatedNewQuickSettingsActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="开启安全备份"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/e227fa57-f728-4ba4-8fff-493751bc5035',
          snapshotUrls: [
            'https://i.gkd.li/i/22401064',
            'https://i.gkd.li/i/25903980',
          ],
        },
        {
          preKeys: [0],
          matches: '[text="立即开启"] - [text="暂不开启"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/aa9782d4-304f-401b-89f6-4fae703b8280',
          snapshotUrls: [
            'https://i.gkd.li/i/22401070',
            'https://i.gkd.li/i/25903983',
          ],
        },
      ],
    },
  ],
});
