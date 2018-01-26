var said=["","0","0"];
var sakd=["","0","0"];
var kyori=["","0","0"];
var bname=["","",""];
var jname=["","0","0"];
var r="0";
var n="";
var i="";
///端末GPS情報の取得（geolocation API）
// 対応している場合
if( navigator.geolocation )
{
    // 現在位置を取得できる場合の処理
    alert("あなたの端末では、現在位置を取得することができます。");
    // 現在位置を取得する
    navigator.geolocation.watchPosition(
    // 成功した時の関数
    function onSuccess( position )
    {
        // 緯度
        var lat=position.coords.latitude;
        // 経度
        var lng=position.coords.longitude;
$(function() {
    var csvlist;
    var insert = ['','',''];
    $.ajax({
        url: './data/aed.csv',
        success: function(data){
            
            //csvを配列に格納
            csvlist = $.csv()(data);
            
             for(var i=1;i<3;i++){
                said[i]=lat-csvlist[i][2];
                if(said[i]<0){
                    said[i]=-said[i];
                }
                said[i]=Math.pow(said[i],2);
                sakd[i]=lng-csvlist[i][3];
                if(sakd[i]<0){
                    sakd[i]=-sakd[i];
                }
                sakd[i]=Math.pow(sakd[i],2);
                kyori[i]=said[i]+sakd[i];
                bname[i]=csvlist[i][1];
                jname[i]=csvlist[i][4];
                kyori[i]=Math.sqrt(kyori[i]);
                kyori[i]=kyori[i]*100000;
                kyori[i]=Math.ceil(kyori[i]) ;
                 }
            for(var k=1;k<2;k++){
              for(var t=2;t>k;t--){
                if(kyori[t]<kyori[t-1]){
                    r=kyori[t];
                    kyori[t]=kyori[t-1];
                    kyori[t-1]=r;
                    n=bname[t];
                    bname[t]=bname[t-1];
                    bname[t-1]=n;
                    i=jname[t];
                    jname[t]=jname[t-1];
                    jname[t-1]=i;
                }
              }
            }
            for(var f=1;f<3;f++){
                //配列から取り出し
                insert[f]="<a href='http://maps.google.com/maps?saddr="+lat+","+lng+"&daddr="+jname[f]+"&dirflg=w'>"+bname[f]+"まで約<font size='5'>"+kyori[f]+"</font>m</a>";
            }
            
            //表示
            $('#un').html(insert[1]);
            $('#deu').html(insert[2]);
        }
    });
});
}, 
        // 失敗した時の関数
        function onError(error)
        {
            // エラーコードのメッセージを定義
            var errorMessage = {
                0: "原因不明のエラーが発生しました…。" ,
                1: "位置情報の取得が許可されませんでした…。" ,
                2: "電波状況などで位置情報が取得できませんでした…。" ,
                3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
                } ;
            // エラーコードに合わせたエラー内容をアラート表示
            alert(errorMessage[error.code]);
            }
        ) ;   
    }

// Geolocation APIに対応していない
else
{
	// 現在位置を取得できない場合の処理
	alert("あなたの端末では、現在位置を取得できません。");
    }