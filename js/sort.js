var said=["","0","0","0","0","0","0","0","0","0","0","0"];
var sakd=["","0","0","0","0","0","0","0","0","0","0","0"];
var kyori=["","0","0","0","0","0","0","0","0","0","0","0"];
var bname=["","","","","","","","","","","",""];
var jname=["","0","0","0","0","0","0","0","0","0","0","0"];
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
        
    $(function a() {
    var csvlist;
    var insert = ['','','','','','','','','','','',''];
    $.ajax({
        url: './data/toire.csv',
        success: function(data){
            
            //csvを配列に格納
            csvlist = $.csv()(data);
            
             for(var i=1;i<12;i++){
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
            for(var k=1;k<11;k++){
              for(var t=11;t>k;t--){
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
              };
            }
            for(var f=1;f<12;f++){
                //配列から取り出し
                insert[f]="<a href='http://maps.google.com/maps?saddr="+lat+","+lng+"&daddr="+jname[f]+"&dirflg=w'>"+f+".現在地から"+bname[f]+"まで約"+kyori[f]+"m</a>";
            }
            
            //表示
            $('#one').html(insert[1]);
            $('#two').html(insert[2]);
            $('#thr').html(insert[3]);
            $('#fou').html(insert[4]);
            $('#fiv').html(insert[5]);
            $('#six').html(insert[6]);
            $('#sev').html(insert[7]);
            $('#egi').html(insert[8]);
            $('#nin').html(insert[9]);
            $('#ten').html(insert[10]);
            $('#ele').html(insert[11]);
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
            $(a());
        }
    ) ;   
}

// Geolocation APIに対応していない
else
{
	// 現在位置を取得できない場合の処理
	alert("あなたの端末では、現在位置を取得できません。");
    $(a());
    }
    
function a() {
    // 緯度
    var lat=34.976105;
    // 経度
    var lng=138.378899;
    var csvlist;
    var insert = ['','','','','','','','','','','',''];
    $.ajax({
        url: './data/toire.csv',
        success: function(data){
            //csvを配列に格納
            csvlist = $.csv()(data);
             for(var i=1;i<12;i++){
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
            for(var k=1;k<11;k++){
              for(var t=11;t>k;t--){
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
              };
            }
            for(var f=1;f<12;f++){
                //配列から取り出し
                insert[f]="<a href='http://maps.google.com/maps?saddr="+lat+","+lng+"&daddr="+jname[f]+"&dirflg=w'>"+f+".呉服町ゲートから"+bname[f]+"まで約"+kyori[f]+"m</a>";
            }
            //表示
            $('#one').html(insert[1]);
            $('#two').html(insert[2]);
            $('#thr').html(insert[3]);
            $('#fou').html(insert[4]);
            $('#fiv').html(insert[5]);
            $('#six').html(insert[6]);
            $('#sev').html(insert[7]);
            $('#egi').html(insert[8]);
            $('#nin').html(insert[9]);
            $('#ten').html(insert[10]);
            $('#ele').html(insert[11]);
        }
    });
}