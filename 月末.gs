/**
*月末の月締めチェック
*トリガー設定用(月末発火)※トリガーは毎日で設定（PM23：00〜翌0:00)
*/

function getsumatsuTrigger(){
  date = new Date();
  date.setDate(date.getDate()+1);//今日の日付に一日足す
  if (date.getDate() === 1){//最終日の判定
    //月末にしたい機能
  };
}
