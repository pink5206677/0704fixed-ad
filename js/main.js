//靜態資源載入完成後..//
$(document).ready(function(){
// 測試測試  alert('靜態資源準備完成'); 
// 測試測試 console.log('靜態資源準備完成'); 
    
//當.close-ad-btn被點擊後...
    $('.close-ad-btn, .close-ad-btn:before').click(function(){
        //被點擊後要做的事情
        //console.log('.close-ad-btn被點擊')
        //把.fixed-ad-box隱藏
        $('.fixed-ad-box').fadeOut();
    });
});