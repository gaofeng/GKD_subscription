import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      //matchTime: 10000, 从桌面小组件进入哔哩哔哩观看视频后，退出返回到哔哩哔哩首页时会跳出开屏广告
      actionMaximum: 2, // 可能连续出现两次 https://github.com/AIsouler/GKD_subscription/issues/1280
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          actionCd: 500,
          matches: '[vid="count_down" || vid="skip"][visibleToUser=true]', // [text*="跳过"] 可能会误触搜索框
          snapshotUrls: 'https://i.gkd.li/i/26164589', //https://github.com/user-attachments/files/26164589/file.zip
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-评论区顶部广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches: '[desc="close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29927752',
        },
      ],
    },
  ],
});
