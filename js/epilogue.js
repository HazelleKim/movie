$(document).ready(function(){
    var $ep_arr = [
        ["ep_top_01.png", "“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”"],
        ["ep_top_02.png", "“학도병들은 군번 없는 용사였다.싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행한 줄은 몰랐다.”"],
        ["ep_top_03.png", "화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해 무엇보다 진정성을 담고자 했다”"],
    ];
    
    var $epBox=`
    <li>
        <div class="phot"></div>
        <div class="info">
            <h3>
                “당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”
            </h3>
        </div>
    </li>
    `
    for(i in $ep_arr){
        $("#epil>ul").append($epBox);
    }

    $("#epil>ul>li").each(function(index){
        $(this).find(".phot").css("background-image", "url(./img/"+$ep_arr[index][0]+")");
        $(this).find(".info h3").text($ep_arr[index][1]);
    });
});