// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
user_hand = check_hand(user_hand); //ここで戻り値がnullなら以下の処理は行わない

if(user_hand != null) {
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}

// 以下は関数の定義

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3);
  let hand_name;
  
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }
  
  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

// プロンプトにグー、チョキ、パーのいずれかが入力されるまで、アラートを出し、プロンプトを再表示する
// キャンセルボタンがクリックされた場合は、専用のアラートを表示し、null を出力してメソッドを終了する
function check_hand(user_hand){
  let u_hand = user_hand;
  while(u_hand != "グー" && u_hand != "チョキ" && u_hand != "パー" || u_hand == null){
    if(u_hand == null){
      alert('またチャレンジしてね');
      return u_hand;
    }else {
      alert('グー・チョキ・パーのいずれかを入力してください');
      u_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    }
  }
  return u_hand;
}