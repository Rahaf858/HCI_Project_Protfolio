document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("next").onclick = function(){
        let lists = document.querySelectorAll(".item");
        document.getElementById("slide").appendChild(lists[0]);
    }
    document.getElementById("peru").onclick = function(){
        let lists = document.querySelectorAll(".item");
        document.getElementById("slide").prepend(lists[lists.length - 1]);
    }
});
