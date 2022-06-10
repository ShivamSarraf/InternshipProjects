function disp(no)
{
    document.getElementById("input").value+=no;
}

function calc()
{
    var val = document.getElementById("input").value
    var ans = eval(val)
    document.getElementById("input").value=ans
}

function clr()
{
    document.getElementById("input").value=''
}