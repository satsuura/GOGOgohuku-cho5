var map;
var marker=[];
var infoWindow=[];
var markerData = [
    //ファッション1,6
    {name:'<a href="a3.html">アシックスウォーキング静岡</a>',
     lat: 34.974175,
     lng: 138.383249,
     icon:'icon/fassyon.png'
     },
     {name:'<a href="s1.html">ＳＡＮＡＤＡＹＡ<a/>',
     lat: 34.974389,
     lng: 138.383483,
     icon:'icon/fassyon.png'
     },
     {name:'<a href="t4.html">ｔｕｔｕａｎｎａ*（チュチュアンナ）静岡店</a>',
     lat:34.974596,
     lng:138.382211,
     icon:'icon/fassyon.png'
     },
     {name:'<a href="t12.html">鳥居帽子店</a>',
     lat: 34.974726,
     lng:138.381916,
     icon:'icon/fassyon.png'
     },
     {name: '<a href="y3.html">ユキベルファム　静岡店</a>',
     lat: 34.974789,
     lng: 138.381820,
     icon:'icon/fassyon.png'
     },
     {name:'<a href="r3.html">リブm</a>',
     lat: 34.974439,
     lng: 138.382280,
     icon:'icon/fassyon.png'
     },
    //宝石2,7
     {name: '<a href="a1.html">アイプリモ静岡店</a>',
     lat:34.974251,
     lng:138.383543,
     icon:'icon/houseki.png'
     },
     {name:'<a href="a5.html">アンジェリック　フォセッテ静岡店</a>',
     lat:34.974237,
     lng:138.383571,
     icon:'icon/houseki.png'
     },
     {name:'<a href="a6.html">安心堂静岡本店</a>',
     lat:34.974764,
     lng:138.382524,
     icon:'icon/houseki.png'
     },
     {name:'<a href="t2.html">タカラ堂</a>',
     lat:34.973951,
     lng:138.383624,
     icon:'icon/houseki.png'
     },
     {name:'<a href="t7.html">TIARA（ティアラ)by lucir-K</a>',
     lat:34.974348,
     lng:138.383553,
     icon:'icon/houseki.png'
     },
     {name: '<a href="t10.html">海野時計・宝石</a>',
     lat:34.974420,
     lng:138.382520,
     icon:'icon/houseki.png'
     },
     {name:'<a href="r2.html">Lien（リアン）</a>',
     lat:34.974210,
     lng:138.383790,
     icon:'icon/houseki.png'
     },
    //カバン3,1
    {name:'<a href="a10.html">池田屋静岡店</a>',
     lat:34.973894,
     lng:138.383928,
     icon:'icon/kaban.png'
     },
    //食品関連4,2
     {name: '<a href="t3.html">竹茗堂</a>',
     lat:34.973945,
     lng:138.383547,
     icon:'icon/syokuhin.png'
     },
     {name:'<a href="m3.html">マルカイ　呉服町店</a>',
     lat:34.974386,
     lng:138.383512,
     icon:'icon/syokuhin.png'
     },
    //コスメ・アロマ5,4
     {name:'<a href="a9.html">アンビエンテ</a>',
     lat:34.974674,
     lng:138.383154,
     icon:'icon/kosume.png'
     },
     {name:'<a href="t5.html">ＤＨＣ直営店（化粧品・健康食品）</a>',
     lat:34.974011,
     lng:138.383297,
     icon:'icon/kosume.png'
     },
     {name:'<a href="h7.html">ふしみや呉服町本店</a>',
     lat:34.974164,
     lng:138.382903,
     icon:'icon/kosume.png'
     },
     {name:'<a href="r5.html">LUSH　静岡店　ラッシュ</a>',
     lat:34.974570,
     lng:138.382275,
     icon:'icon/kosume.png'
     },
    //書店6,2
     {name:'<a href="t6.html">ＴＳＵＴＡＹＡすみや静岡本店</a>',
     lat:34.975868,
     lng:138.380437,
     icon:'icon/syoten.png'
     },
    //コンビニ7,2
     {name:'<a href="s11.html">セブン・イレブン　静岡呉服町通り店</a>',
     lat:34.974230,
     lng: 138.383121,
     icon:'icon/konbini.png'
     },
     {name:'<a href="h5.html">ファミリーマート　静岡呉服町店</a>',
     lat:34.975368,
     lng: 138.380951,
     icon:'icon/konbini.png'
     },
    //アミューズメント8,1
     {name:'<a href="t1.html">タイトーFステーション静岡店</a>',
     lat:34.974401,
     lng:138.383211,
     icon:'icon/amyu-zument.png'
     },
    //クリニック9,1
     {name:'<a href="m6.html">宮下内科クリニック</a>',
     lat:34.974102,
     lng:138.382833,
     icon:'icon/kurinikku.png'
     },
    //教育10,1
     {name:'<a href="k12.html">コペル　静岡呉服町教室</a>',
     lat:34.975295,
     lng:138.380543,
     icon:'icon/kyouiku.png'
     },
    //印章堂11,2
     {name: '<a href="k9.html">栗田印房</a>',
     lat:34.974662,
     lng:138.383166,
     icon:'icon/insyoudou.png'
     },
     {name: '<a href="y4.html">吉田印章店</a>',
     lat:34.974757,
     lng:138.381884,
     icon:'icon/insyoudou.png'
     },
    //クリーニング12,1
     {name:'<a href="h2.html">白洋舎　呉服町タワー店</a>',
     lat:34.975779,
     lng:138.380650,
     icon:'icon/kuri-ningu.png'
     },
    //和装13,1
     {name:'<a href="k2.html">河内屋</a>',
     lat:34.974692,
     lng:138.382618,
     icon:'icon/wasou.png'
     },
    //メガネ14,3
     {name:'<a href="a4.html">ＡＪＯＣ（アジョック）疋野本店</a>',
     lat:34.975420,
     lng:138.380008,
     icon:'icon/megane.png'
     },
     {name:'<a href="m7.html">安心堂静岡メガネ店</a>',
     lat:34.974533,
     lng:138.383110,
     icon:'icon/megane.png'
     },
     {name:'<a href="a7.html">メガネの春田　呉服町店</a>',
     lat:34.975021,
     lng:138.382016,
     icon:'icon/megane.png'
     },
    //飲食店15,16
     {name:'<a href="a11.html">ＩＬ　ＴＡＶＯＲＯ（イルターボロ）</a>',
     lat: 34.973796,
     lng: 138.383423,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="a15.html">インドカレーハウス　チャイ　静岡店</a>',
     lat:34.974896,
     lng:138.382080,
     icon:'icon/insyokuten.png'
     },
     {name:"<a href='k11.html'>KEY'S CAFÉ 静岡呉服町店</a>",
     lat:34.974217,
     lng: 138.383159,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="k6.html">餃子の王将　静岡呉服店</a>',
     lat:34.975440,
     lng:138.380920,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="k8.html">串カツ田中　呉服町通り店</a>',
     lat:34.974040,
     lng:138.383215,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="s3.html">猿Ｃａｆｅ＆Ｂａｒ静岡呉服町店</a>',
     lat:34.974304,
     lng:138.383413,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="s8.html">しゃぶ禅</a>',
     lat: 34.975267,
     lng: 138.380236,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="s9.html">スターバックスコーヒー　ＴＳＵＴＡＹＡすみや静岡本店</a>',
     lat: 34.975650,
     lng: 138.380320,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="t9.html">戸隠そば　呉服町東店</a>',
     lat: 34.975108,
     lng: 138.382002,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="t11.html">ドトールコーヒーショップ　静岡呉服町２丁目店</a>',
     lat: 34.974496,
     lng: 138.382479,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="n1.html">二パチ　静岡呉服町店</a>',
     lat: 34.973891, 
     lng: 138.383063,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="h4.html">萬屋（バンヤ）×ほのか静岡店</a>',
     lat: 34.974164, 
     lng: 138.382904,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="h6.html">fu-cha　フーチャ</a>',
     lat: 34.974019, 
     lng: 138.383186,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="h10.html">PELLICANO ペリカーノ</a>',
     lat: 34.974026, 
     lng: 138.383558,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="m1.html">マクドナルド　静岡呉服町店</a>',
     lat: 34.974634, 
     lng: 138.382662,
     icon:'icon/insyokuten.png'
     },
     {name:'<a href="m4.html">丸亀製麺</a>',
     lat: 34.975359, 
     lng: 138.381067,
     icon:'icon/insyokuten.png'
     },
     //生活雑貨16,8
     {name:'<a href="k3.html">菊秀刃物店</a>',
     lat: 34.975833, 
     lng:138.379935,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="k7.html">ＧＯＵＴＡＳ　ｂｙ　Ｌｅｍｏｎ</a>',
     lat: 34.974466, 
     lng: 138.382476,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="t13.html">トレハン</a>',
     lat:34.975445, 
     lng:138.379689,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="h3.html">PASA（パシャ）</a>',
     lat:34.974668, 
     lng:138.381982,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="m2.html">ますたけ</a>',
     lat:34.975486, 
     lng:138.379753,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="m5.html">三保原屋</a>',
     lat:34.974050, 
     lng:138.383264,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="y2.html">YAWATAYA</a>',
     lat:34.974447, 
     lng:138.382158,
     icon:'icon/seikatuzakka.png'
     },
     {name:'<a href="w2.html">私の部</a>屋',
     lat:34.974631,
     lng:138.381984,
     icon:'icon/seikatuzakka.png'
     },
     //音楽・楽器17,2
     {name:'<a href="s10.html">すみやグッディ本店</a>',
     lat:34.975349 ,
     lng:138.380217,
     icon:'icon/ongaku.png'
     },
     {name:'<a href="t6.html">ＴＳＵＴＡＹＡすみや静岡本店</a>',
     lat:34.975868,
     lng:138.380437,
     icon:'icon/ongaku.png'
     },
     //金融機関18,2
     {name:'<a href="s6.html">静岡銀行呉服町支店</a>',
     lat:34.974492 ,
     lng:138.384945,
     icon:'icon/ginkou.png'
     },
     {name:'<a href="s7.html">清水銀行静岡支店</a>',
     lat:34.976601 ,
     lng:138.378631,
     icon:'icon/ginkou.png'
     },
     //結婚総合案内所19,2
     {name:'<a href="h8.html">ブライダル　エンポリアム　ホクレア</a>',
     lat:34.975294 , 
     lng:138.380544,
     icon:'icon/kekkon.png'
     },
     {name:'<a href="h9.html">ブライダルパーク</a>',
     lat:34.974267 , 
     lng:138.383679,
     icon:'icon/kekkon.png'
     },
     //薬局・薬店20,3
     {name:'<a href="a2.html">あおば薬局　中央店</a>',
     lat:34.975891 , lng:138.379899,
     icon:'icon/yakkyoku.png'
     },
     {name:'<a href="k1.html">唐木屋薬局</a>',
     lat:34.974445 , lng:138.382159,
     icon:'icon/yakkyoku.png'
     },
     {name:'<a href="s4.html">サンドラッグ呉服町店</a>',
     lat:34.974003 , lng:138.383442,
     icon:'icon/yakkyoku.png'
     },
     //フィットネス21,1
     {name:'<a href="w1.html">YSフィットネスクラブ呉服町</a>',
     lat:34.975292 , lng:138.380184,
     icon:'icon/fittonesu.png'
     },
    //ギャラリースペース22,3
     {name:'<a href="k5.html">ギャラリーワタナベカメラ</a>',
     lat:34.974637 , lng:138.381946,
     icon:'icon/gyarari-.png'
     },
     {name:'<a href="k10.html">呉服町ギャラリー</a>',
     lat:34.973974 , lng:138.383400,
     icon:'icon/gyarari-.png'
     },
     {name:'<a href="t8.html">d-labo静岡by SURUGA bank</a>',
     lat:34.974444 , lng:138.382160,
     icon:'icon/gyarari-.png'
     },
     //不動産23,1
     {name:'<a href="a14.html">オチアイ</a>',
     lat:34.974931,
     lng:138.382731,
     icon:'icon/hudouya.png'
     },
    //美容24,1
     {name:'<a href="h11.html">ANNEX静岡伊勢丹　ベネファージュ　ヘアリプロ</a>',
     lat:34.974847,
     lng:138.381140,
     icon:'icon/biyou.png'
     }
    ];
/*
{name:,
lat:,
lng:
}
*/

function initMap(ja) {
 // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('map'), 
   { // #sampleに地図を埋め込む
     center: mapLatLng, // 地図の中心を指定
      zoom: 15 ,// 地図のズームを指定
   });
   
   switch(ja){
       case 1:
           for (var i = 0; i < 6; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 0; v < 6; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon'],// マーカーの画像を変更
               scaledSize: new google.maps.Size( 50, 50 ),
            }
        });
   }
       break;
       case 2:
           for (var i = 6; i < 13; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 6; v < 13; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 3:
             for (var i = 13; i < 14; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 13; v < 14; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 4:
           for (var i = 14; i < 16; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 14; v < 16; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 5:
           for (var i = 16; i < 20; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 16; v < 20; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 6:
           for (var i = 20; i < 21; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 20; v < 21; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 7:
           for (var i = 21; i < 23; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 21; v < 23; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 8:
            for (var i = 23; i < 24; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 23; v < 24; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 9:
            for (var i = 24; i < 25; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 24; v < 25; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 10:
            for (var i = 25; i < 26; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 25; v < 26; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 11:
            for (var i = 26; i < 28; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 26; v < 28; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 12:
            for (var i = 28; i < 29; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 28; v < 29; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 13:
            for (var i = 29; i < 30; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 29; v < 30; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 14:
            for (var i = 30; i < 33; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 30; v < 33; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 15:
            for (var i = 33; i < 49; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 33; v < 49; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 16:
            for (var i = 49; i < 57; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 49; v < 57; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 17:
            for (var i = 57; i < 59; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 57; v < 59; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 18:
            for (var i = 59; i < 61; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 59; v < 61; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 19:
            for (var i = 61; i < 63; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 61; v < 63; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 20:
            for (var i = 63; i < 66; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 63; v < 66; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 21:
            for (var i = 66; i < 67; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 66; v < 67; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 22:
            for (var i = 67; i < 70; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 67; v < 70; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 23:
            for (var i = 70; i < 71; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 70; v < 71; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
        case 24:
            for (var i = 71; i < 72; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }
    for(var v = 71; v < 72; v++){
        marker[v].setOptions({
            icon: {
               url: markerData[v]['icon']// マーカーの画像を変更
               ,scaledSize: new google.maps.Size( 40, 40 ),
            }
        });
   }
        break;
   }
   
   
}
 
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}



