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
  ],
});
