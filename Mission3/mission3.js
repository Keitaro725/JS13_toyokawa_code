function judgement()
{
    //点数を数値に変換
    var math = document.getElementById("math").value;
    var english = document.getElementById("english").value;
    var object = document.getElementById("judge");
    if (math > 60 && english > 70)
    {
        object.innerText = "合格！";
    }
    else
    {
        object.innerText = "残念！不合格！！";
    }
    alert(object.innerText);
}

