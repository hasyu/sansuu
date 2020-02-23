'use strict'

// 演算子の選択
function getRadioValue(name) {
  var radios = document.getElementsByName(name);
  var result;
  for(var i=0; i<radios.length; i++){
    if (radios[i].checked) {
      result = radios[i].value;
      break;
    }
  }

  // 最大数と最少数
  var max = 9;
  var min = 1;

  var list = [];
  for (var i = 0; i < 10; i++) {
    
    // ランダム数
    var r = Math.floor(Math.random() * max + 1 - min) + min;
    var l = Math.floor(Math.random() * max + 1 - min) + min;

    // 式
    var bun = String(r) + String(result) + String(l) + "=";
    if (result =="+"){
      list.push(r + l);
      var kaitou = r + l;
    }else if (result == "-"){
      list.push(r-l);
      var kaitou = r - l;
    }else if (result == "*"){
      list.push(r*l);
      var kaitou = r * l;
    }else {
      list.push(Math.round(r/l*10)/10);
      var kaitou = Math.round(r/l*10)/10;
    }

    // 答え
    var span = '<span class="kuro">' + String(kaitou) + '</span>';

    // ページへ表示
    document.getElementById('siki1').innerHTML += bun + '<input  type="text"  value="">' + span + '<br>';
    
  }
  // ボタン１回
  document.getElementById('1kai').disabled = true;
}
// リセットボタン
document.getElementById('riset').onclick = function() {
  location.reload()
}

// 答えの色変更
document.getElementById('kaitou').onclick = function() {
    var el = document.getElementsByClassName('kuro');
    for(var i=0; i<el.length; i++){
      el[i].style.opacity = 100;
    }
}