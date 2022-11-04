let arrayevt = [
  "IEWindows",
  "IEMac",
  "FFWindows",
  "FFMac",
  "FFLinux"
];
let array2 = [
    "Windows",
  "Mac",
  "Linux"
]

arrayevt.forEach((element) => {
  
    document.getElementById(element).addEventListener("click", function () {
    if (document.getElementById(element).checked) {
        array2.forEach(dato => {
            if(element.includes("Windows")){
                document.getElementById(dato).checked = true;

            } 
            if(element.includes("Mac")){
                document.getElementById(dato).checked = true;

            } 
            if(element.includes("Linux")){
                document.getElementById(dato).checked = true;

            } 

        });
        

    
    }
  });
});
