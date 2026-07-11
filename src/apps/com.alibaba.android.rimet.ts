import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 0,
      name: '功能-点击查看打卡结果',
      desc: 'H5 打卡页面内"查看打卡结果"按钮未暴露无障碍节点,通过坐标点击(基于 1080x2340 屏幕)',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.alibaba.lightapp.runtime.ariver.TheOneActivityMainTask',
          matches:
            'com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0[clickable=true]',
          action: 'clickCenter',
          // 按钮区域: 左上(183,2016) 右下(471,2073), 中心(327,2045)
          // 相对 m0(left=0,top=229,width=1080,height=2069) 偏移
          position: { left: 'width*0.3028', top: 'height*0.8777' },
          snapshotUrls: ['https://i.gkd.li/i/29927616'],
        },
      ],
    },
  ],
});
