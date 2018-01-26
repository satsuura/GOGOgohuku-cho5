$(function() {
    var target = '#csvText';
    var csvList;
    var insert = '';
    $.ajax({
        url: './data/mise.csv',
        success: function(data) {
 
            // csvを配列に格納
            csvList = $.csv()(data);
 
            // 挿入するHTMLを作成
            insert=csvList[2][1];
            
            // 追加するパターン
            // $(target).append(insert);
            
            // 上書きパターン
            $(target).html(insert);
        }
    });
});