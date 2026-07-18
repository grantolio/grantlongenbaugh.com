export interface Gallery {
  slug: string;
  title: string;
  location: string;
  coverImage: string;
  images: string[];
}

export const galleries: Gallery[] = [
  {
    slug: 'olympic-peninsula',
    title: 'Olympic Peninsula',
    location: 'Washington',
    coverImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469049719602-PQ42R885OA7FO4ZTN87H/image-asset.jpeg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1473368529514-TCP4MGTBEZP3C4K9A4TX/glongenbaugh_ONP_web-1-9.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469047713001-RCLUV023NYE43V8YK2ZV/Longenbaugh-olympic-national-park-4.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1473368433927-ESK143AJGMF0FG0DJXSH/glongenbaugh_ONP_web-1.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1473368508227-91JUHPJFKOGD6DTW2PWT/glongenbaugh_ONP_web-1-13.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1473368435804-KG72Z3TUX30WD150JKAU/glongenbaugh_ONP_web-1-3.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469047951695-261K1FTBCSTF2OLD8NEE/Longenbaugh-olympic-national-park-20.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469047831494-X1EOYKS1P2XGNHUO0T43/Longenbaugh-olympic-national-park-10.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1473368479505-FE2VVBFR6I4V22C6Z09N/glongenbaugh_ONP_web-1-7.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469047771432-YUE7F4L1DI1K6OY5P5ES/Longenbaugh-olympic-national-park-8.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1473368457960-QVQPTFM5STXP7NW1FG7Z/glongenbaugh_ONP_web-1-5.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469047860793-QRVW5OCOQJ2YCQKQ7BAR/Longenbaugh-olympic-national-park-12.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1469047906508-4S5GUMYRDJBXVK8IUIXI/Longenbaugh-olympic-national-park-16.jpg',
    ],
  },
  {
    slug: 'grand-tetons',
    title: 'Grand Tetons',
    location: 'Wyoming',
    coverImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458502215137-8G951LXQ5QZVED38SCBQ/tetons-button.jpg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354287517-EMDR8VOBL0CFUC233TQE/grant-longenbaugh-tetons-28.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354289171-C6HIKN8HTNSK6EA44DIA/grant-longenbaugh-tetons-29.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354290576-9UYKRV1RWB1RWS0DP5P3/grant-longenbaugh-tetons-30.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354292561-LBT7O71XS2FUBSN37MNW/grant-longenbaugh-tetons-24.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354293886-JGDSVURKOOAWDJS7CS0F/grant-longenbaugh-tetons-26.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354294477-NX5MKV2LWSA6EJFA7FNH/grant-longenbaugh-tetons-27.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354295698-ZLC864S9LZAEXIHEJNMG/grant-longenbaugh-tetons-25.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354298308-DOXHK6XSUWMF2KNWHVVW/grant-longenbaugh-tetons-17.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354300133-VET10UXH5SYJWW5S4I3G/grant-longenbaugh-tetons-18.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354301479-V8JI6JBQJVQQKSMQ6NFO/grant-longenbaugh-tetons-19.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458354304145-9DH5LIWJMTBWWOCB6CLM/grant-longenbaugh-tetons-22.jpg',
    ],
  },
  {
    slug: 'eastern-sierra',
    title: 'Eastern Sierra',
    location: 'California',
    coverImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458502224706-5QU7NA7PZN3WA2VTXV5N/sierra-button.jpg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358641502-KYUKVUJ2CKK0BIS1FNII/grant-longenbaugh-Eastern-Sierra-23.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358642588-J6A0F0PZCK8M1XNIGZ49/grant-longenbaugh-Eastern-Sierra-25.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358646856-H8BKLSBP7TGHU1OMLZNA/grant-longenbaugh-Eastern-Sierra-19.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358646853-26ZTPRZHJELYVN87K42Y/grant-longenbaugh-Eastern-Sierra-24.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358649679-MN2MH8TANSM3K3BMZV8J/grant-longenbaugh-Eastern-Sierra-21.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358649181-G2U5CRCLRLNOFLAKB2TH/grant-longenbaugh-Eastern-Sierra-17.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458358651828-358JLCMA0V421W0KYC3C/grant-longenbaugh-Eastern-Sierra-20.jpg',
    ],
  },
  {
    slug: 'death-valley',
    title: 'Death Valley',
    location: 'California',
    coverImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458502288222-6ZXI5XT6HJUKXIQMLOEQ/image-asset.jpeg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353984532-IBGAAZY790QP0KTL1HZ1/grant-longenbaugh-DV-16.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353986471-9QO7WWOQ35H5G2ROJ0KC/grant-longenbaugh-DV-21.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353987631-AHPQHN275BVPHUKH4C32/grant-longenbaugh-DV-22.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353991076-KVOZEW43CV20SAMVYTBW/grant-longenbaugh-DV-23.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353990955-Z8L7G8KSDMHSUK4CESIE/grant-longenbaugh-DV-14.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353991986-MIVB3381F5KMCJY3WZB4/grant-longenbaugh-DV-15.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458353991902-UVFT8866ZMJSRTEDNDJJ/grant-longenbaugh-DV-17.jpg',
    ],
  },
  {
    slug: 'new-zealand',
    title: 'New Zealand',
    location: 'South Island',
    coverImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458502543696-MYIM3VV6TS4GYJKTHR44/image-asset.jpeg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397297448-L3WQQSXFSGZJZXQXCUCL/grant-longenbaugh-31.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397295175-S9RJBQ7NBK2P7H4AE5OO/grant-longenbaugh-30.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397298843-BANKOLMA4RKHATKN5UGG/grant-longenbaugh-28.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397296283-RFWWPNLV3U0BJAL6QLHP/grant-longenbaugh-32.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397298886-TBOVX8AFDHMTOGO5PQ6P/grant-longenbaugh-27.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397306183-DBILL6EGRLWHY57R1MD1/grant-longenbaugh-29.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397306616-FC7X6XOFAHOEC74B1L2T/grant-longenbaugh-26.jpg',
    ],
  },
  {
    slug: 'great-48',
    title: 'Great 48',
    location: 'Western United States',
    coverImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458502513439-OWT7OI9AW0UJ3TMQJB1C/image-asset.jpeg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397910594-RF9D64JJ2196BOV3GWTY/grant-longenbaugh-36.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397899440-0QSVW6CIKUK3QBCRNDRE/grant-longenbaugh-42.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397899486-R22W50F4SLGHHTSHS8B5/grant-longenbaugh-41.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397903783-1H6G6T65TZEB8T1SQPWM/grant-longenbaugh-38.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397903474-3C73LC6FU6RHW1JTRX1T/grant-longenbaugh-34.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397909281-U4PYIP35878TEK45U843/grant-longenbaugh-35.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397908459-4Y1C6HHJQJBW3TP9Y3WD/grant-longenbaugh-37.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397911416-V2R6LLDBZ94LMKWTK119/grant-longenbaugh-39.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1458397911575-HS3VJVG5D8WM3JB84E2Z/grant-longenbaugh-40.jpg',
    ],
  },
];
