function getFormvalue(){
    var first = document.getElementById("fname").value;
    var second = document.getElementById("lname").value;

    document.GetElementById("submit").InnerHTML = first;
    document.GetElementById("submit").InnerHTML = second;
}