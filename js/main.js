'use strict'

// jQueryの使用あり（ライブラリの使用は無し）


  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ------------　　 　ＰＣ対応 901px以上　 　 -----------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------

if (window.matchMedia( "(min-width: 901px)" ).matches) {

  //--------------------------- 
  //　top_bisual
  //----------------------------
  // スクロールすると拡大
  // スクロール100pxにつきimg_container：widthを10％ずつ拡大
  window.addEventListener('scroll', () => {
    let elem = document.getElementById('img_container');

    // スクロール100pxにつきimg_container：widthを10％ずつ拡大
    // let scrollY = window.scrollY/10;
    // elem.style.width = 100 + scroll + '%';

    // スクロール100pxにつきimg_container：scaleの小数点のところを0.1ずつ増やして拡大（1.1 , 1.2 , 1.3   ....のように）
    // let ratio = window.scrollY/100;
    // elem.style.transform = 'scale(1.' + ratio + ',' + '1.' + ratio + ')';


    // スクロール100pxすると1000で割って0.1、これだと上記と同じだが拡大比率がデモに比べて足りないため、その3倍にしてから1を足す。
    // （1.3 , 1.6 , 1.9   ....となる）
    // ratioに計算した数値を代入済み。こっちのほうがわかりやすい。
    let ratio = window.scrollY / 1000 * 3 + 1;
    elem.style.transform = 'scale(' + ratio + ',' + ratio + ')';
    
    console.log(ratio);
    console.log(elem.style.transform);
  });
  
  
  //--------------------------- 
  //　nav_headerハンバーガーメニュー
  //----------------------------
  
  // 指定スクロールでフワッとヘッダーを出現させる

  onload = function () {
    let animation = function () {
      let rect = fixed_part.getBoundingClientRect();
      let y = window.pageYOffset;
      let scrollTop = rect.top + y;
      if (scrollTop > 520) {
        fixed_part.classList.add('appear');
      } else {
        fixed_part.classList.remove('appear');
      }
    }
    window.addEventListener('scroll', animation);
  }
  

    // ハンバーガーアイコンをクリックでメニュー出現
    window.addEventListener('DOMContentLoaded', function () {
      const checkBox = document.getElementById('checkbox');
      const hiddenMenu = document.getElementById('hidden_menu');
      const mask = document.getElementById('mask');
      checkBox.addEventListener('change', function () {
        if (this.checked) { // ←重要なポイント！
          hiddenMenu.style.top = '0';
        } else {
          hiddenMenu.style.top = '-280px';
        }
      });
    });
  
  
    // ハンバーガーメニュー内のリンクをクリックしたらメニュー閉じる
  
    // .hidden_menu内のリンクをクリックしたら、#checkboxをクリックした事にします。
    // ドロップダウンのメニュー部分が「display:block」などで表示されている場合に有効
    $('.hidden_menu a[href]').on('click', function (event) {
      $('#checkbox').trigger('click');
    });
  //--------------------------- 
  //　       sidebar
  //----------------------------

  // 指定範囲内だけでサイドバーを表示させる

  window.addEventListener("scroll", function () {
    const sideBar = document.querySelector("#sidebar");
    const scroll = window.pageYOffset;
    if (scroll > 900 && scroll < 4050) {
      sideBar.style.right = "0";
      console.log(scroll);
    } else {
      sideBar.style.right = "-48px";
      console.log(scroll);
    }
  });

  
  
  //--------------------------- 
  //　       access_mask
  //----------------------------

  // ギャラリー、アクセスの画像などの入れ替え
  // 特定の要素出現タイミングでスタイルを変化させるパターン。

  const myFunc = function () {

    const accessTtl = document.getElementById('access_ttl');
    const accessMask = document.getElementById('access_mask_img');
    const position = Math.floor(window.innerHeight);

    let accessTtlTop = Math.floor(accessTtl.getBoundingClientRect().top);

    console.log(accessTtlTop);
    console.log(position);

    if (accessTtlTop < position && accessTtlTop > 0) {
      gallery.style.opacity = "0";
      accessMask.style.opacity = "1";
    } else {
      gallery.style.opacity = "1";
      accessMask.style.opacity = "0";
    }

  }
  window.addEventListener('scroll', myFunc, false);



  // ページ内リンクでスムーズスクロール

  $(function () {
    // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
    $('a[href^="#"]').click(function () {
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 0;
      // スクロールの速度（ミリ秒）
      var speed = 400;
      // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
      var href = $(this).attr("href");
      // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
      var position = target.offset().top + adjust;
      // スムーススクロール linear（等速） or swing（変速）
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });



  //--------------------------- 
  //　information ～
  //----------------------------

  // スクロールで表示位置まで来たらフワッと上方向にフェードインで表示

  let fadeInTarget = document.querySelectorAll('.fade_in');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 150) {
        fadeInTarget[i].classList.add('scroll_in');
      }
    }
  });




  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ------------　　　スマホ対応 900px以下　　 -----------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------

// } else if (window.matchMedia( "(max-width: 900px)" ).matches) {
} else {

  //--------------------------- 
  //　top_bisual　　ＰＣと違う
  //----------------------------
  // スクロールすると拡大
  // スクロール100pxにつきimg_container：widthを元の30％ずつ拡大
  window.addEventListener('scroll', () => {
    let elem = document.getElementById('img_container');

    // 100px下スクロール毎に元の
    let ratio = 1 - (0.1 * window.scrollY / 100);
    elem.style.transform = 'scale(' + ratio + ',' + ratio + ')';

    console.log(ratio);
    console.log(elem.style.transform);
  });
  
  
  //--------------------------- 
  //　nav_headerハンバーガーメニュー
  //----------------------------
   
  // 指定スクロールでフワッとヘッダーを出現させる
  
  onload = function () {
    let animation = function () {
      let rect = fixed_part.getBoundingClientRect();
      let y = window.pageYOffset;
      let scrollTop = rect.top + y;
      if (scrollTop > 520) {
        fixed_part.classList.add('appear');
      } else {
        fixed_part.classList.remove('appear');
      }
    }
    window.addEventListener('scroll', animation);
  }
  
  
    // ハンバーガーアイコンをクリックでメニュー出現

    window.addEventListener('DOMContentLoaded', function () {
      const checkBox = document.getElementById('checkbox');
      const hiddenMenu = document.getElementById('hidden_menu');
      const mask = document.getElementById('mask');
      checkBox.addEventListener('change', function () {
        if (this.checked) { // ←重要なポイント！
          hiddenMenu.style.top = '0';
        } else {
          hiddenMenu.style.top = '-280px';
        }
      });
    });
  
  
    // ハンバーガーメニュー内のリンクをクリックしたらメニュー閉じる
  
    // .hidden_menu内のリンクをクリックしたら、#checkboxをクリックした事にします。
    // ドロップダウンのメニュー部分が「display:block」などで表示されている場合に有効
    $('.hidden_menu a[href]').on('click', function (event) {
      $('#checkbox').trigger('click');
    });
  
  //--------------------------- 
  //　       sidebar
  //----------------------------

  // 指定範囲内でサイドバーを表示させる
  window.addEventListener("scroll", function () {
    const sideBar = document.querySelector("#sidebar");
    const scroll = window.pageYOffset;
    if (scroll > 900 && scroll < 4050) {
      sideBar.style.right = "0";
      console.log(scroll);
    } else {
      sideBar.style.right = "-48px";
      console.log(scroll);
    }
  });


  
  //--------------------------- 
  //　       access_mask
  //----------------------------

  // ギャラリー、アクセスの画像などの入れ替え
  // 特定の要素出現タイミングでスタイルを変化させるパターン。

  const myFunc = function () {

    const accessTtl = document.getElementById('access_ttl');
    const accessMask = document.getElementById('access_mask_img');
    const position = Math.floor(window.innerHeight);

    let accessTtlTop = Math.floor(accessTtl.getBoundingClientRect().top);

    console.log(accessTtlTop);
    console.log(position);

    if (accessTtlTop < position && accessTtlTop > 0) {
      gallery.style.opacity = "0";
      accessMask.style.opacity = "1";
    } else {
      gallery.style.opacity = "1";
      accessMask.style.opacity = "0";
    }

  }
  window.addEventListener('scroll', myFunc, false);


  // ページ内リンクでスムーズスクロール

  $(function () {
    // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
    $('a[href^="#"]').click(function () {
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 0;
      // スクロールの速度（ミリ秒）
      var speed = 400;
      // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
      var href = $(this).attr("href");
      // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
      var position = target.offset().top + adjust;
      // スムーススクロール linear（等速） or swing（変速）
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });



  //--------------------------- 
  //　information ～
  //----------------------------

  // スクロールで表示位置まで来たらフワッと上方向にフェードインで表示

  let fadeInTarget = document.querySelectorAll('.fade_in');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 150) {
        fadeInTarget[i].classList.add('scroll_in');
      }
    }
  });





}