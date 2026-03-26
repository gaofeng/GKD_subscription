import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: 'NFC支付完成页',
      rules: [
        {
          fastQuery: true,
          actionDelay: 2000,
          activityIds:
            'com.alipay.android.phone.businesscommon.ucdp.nfc.activity.NResPageActivity',
          matches: 'TextView[text="完成"]',
        },
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/26271769', //https://github.com/user-attachments/files/26271769/file.zip
      ],
    },
  ],
});
