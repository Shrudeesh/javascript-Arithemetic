 function changeColor()
        {
            
                var paragraph= document.getElementById("paragraph");
                var ddl = document.getElementById("colorSelect");
                var text = ddl.options[ddl.selectedIndex].innerHTML;
                paragraph.style.color = text;
           
        }