$(document).ready(function(){
    var $cha_arr = [
        ["cha_01.jpg", "대위 이명준 역 (김명민)","만약 그들이 전쟁터에 가지 않았더라면, 아마 지금쯤 살아서 멋지게 인생을 살았을 청춘들입니다! 제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을 기억하게 할수 있도록 제가 꼭 만들고 싶습니다!"],
        ["cha_02.jpg", "학도병 최성필 역 (최민호)","같이 집에 가야지!"],
        ["cha_04.jpg", "중대장 박찬년 역 (곽시양)","기간병은 남고 학도병은 퇴각해!"],
        ["cha_05.jpg", "종군기자 매기 역 (매간폭스)","하지만 구할 수 있는 사람을 못 구하면 우리는 뭐가 될까요?"],
    ];

    var $chaBox = `
    <li>
        <div class="phot"></div>
        <div class="text">
            <h3>대위 이명준 역 (김명민)</h3>
            <p><span>만약 그들이 전쟁터에 가지 않았더라면,</span><span>
                아마 지금쯤 살아서 멋지게 인생을 살았을 청춘들입니다! </span><span>
                제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을 </span><span>
                기억하게 할수 있도록 제가 꼭 만들고 싶습니다!</span></p>
        </div>
    </li>
    `;
    for(i in $cha_arr){
        
        $("#char>ul").append($chaBox);
    }
    $("#char>ul>li").each(function(index){
        $(this).find(".phot").css("background-image", "url(./img/"+$cha_arr[index][0]+")");
        $(this).find(".text h3").text($cha_arr[index][1]);
        $(this).find(".text p").text($cha_arr[index][2]);
    });


























});