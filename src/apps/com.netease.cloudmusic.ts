import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
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
          key: 0,
          excludeActivityIds: [
            '.music.biz.setting.activity.SettingActivity',
            '.music.biz.search.activity.SearchActivity',
          ],
          matches: [
            '[vid="adContainer"] >4 [vid="skipBtn"][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '游戏下载弹窗',
      fastQuery: true,
      rules: [
        {
          activityIds: '.activity.LoadingAdActivity',
          matches: ['[vid="md_dialog_cm_close_btn"][visibleToUser=true]'],
          snapshotUrls: 'https://i.gkd.li/i/26272231',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告', //AISouler
      fastQuery: true,
      rules: [
        {
          key: 1,
          action: 'back',
          activityIds: [
            '.activity.MainActivity',
            '.activity.PlayerActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
            '.music.biz.comment.activity.CommentActivity',
          ],
          excludeMatches:
            '[text="当前场景" || vid="mainDrawerContainer"][visibleToUser=true]',
          matches:
            '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text^="续费后，即可畅听" || text*="小组件到桌面"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534',
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/20097535',
            'https://i.gkd.li/i/20097609',
            'https://i.gkd.li/i/20115012',
            'https://i.gkd.li/i/22451511',
            'https://i.gkd.li/i/23770986',
            'https://i.gkd.li/i/23770978',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15404777',
            'https://i.gkd.li/i/20115204',
            'https://i.gkd.li/i/20159204',
            'https://i.gkd.li/i/24157914',
          ],
        },
      ],
    },
  ],
});

//LinearLayout[vid="dsl_dialog_root"] >5 TextView[text*="VIP歌曲免费听"] + ImageView
