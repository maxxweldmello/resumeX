   //print
   const printButton = document.getElementById("print");
   printButton.addEventListener('click', function(){
       print();
   })

   //change font style function
   var changeFontStyle = function (font) {
           document.getElementById(
               "fontChange").style.fontFamily
                       = font.value;
   }

   //change color function
   function changeColor(){
       let color = document.getElementById('colorInputText').value;
       document.body.style.color = color;
   }

   //tables function
       let arrHead = new Array();	// array for header.
       arrHead = ['Course', 'Institution', 'Year of passing', 'Percentage/CGPA', ''];

       // first create TABLE structure with the headers.
       let createTable = () => {
           let empTable = document.createElement('table');
           empTable.setAttribute('id', 'empTable'); // table id.

           let tr = empTable.insertRow(-1);
           for (let h = 0; h < arrHead.length; h++) {
               let th = document.createElement('th'); // create table headers
               th.innerHTML = arrHead[h];
               tr.appendChild(th);
           }

           let div = document.getElementById('cont');
           div.appendChild(empTable);  // add the TABLE to the container.
       }

       // now, add a new row to the TABLE.
       let addRow = () => {
           let empTab = document.getElementById('empTable'); 3

           let rowCnt = empTab.rows.length;   // table row count.
           let tr = empTab.insertRow(rowCnt); // the table row.
           tr = empTab.insertRow(rowCnt);

           for (let c = 0; c < arrHead.length; c++) {
               let td = document.createElement('td'); // table definition.
               td = tr.insertCell(c);

               if (c === 4) {      // the first column.
                   // add a button in every new row in the first column.
                   let button = document.createElement('input');

                   // set input attributes.
                   button.setAttribute('type', 'button');
                   button.setAttribute('value', '-');

                   // add button's 'onclick' event.
                   button.setAttribute('onclick', 'removeRow(this)');

                   td.appendChild(button);
               }
               else {
                   // 2nd, 3rd and 4th column, will have textbox.
                   let ele = document.createElement('input');
                   ele.setAttribute('type', 'text');
                   ele.setAttribute('value', '');

                   td.appendChild(ele);
               }
           }
       }

       // delete TABLE row function.
       let removeRow = (oButton) => {
           let empTab = document.getElementById('empTable');
           empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
           // button -> td -> tr.
       }

       // // function to extract and submit table data.
       // let submit = () => {
       //     let myTab = document.getElementById('empTable');
       //     let arrValues = new Array();

       //     // loop through each row of the table.
       //     for (row = 1; row < myTab.rows.length - 1; row++) {
       //         // loop through each cell in a row.
       //         for (c = 0; c < myTab.rows[row].cells.length; c++) {
       //             let element = myTab.rows.item(row).cells[c];
       //             if (element.childNodes[0].getAttribute('type') == 'text') {
       //                 arrValues.push("'" + element.childNodes[0].value + "'");
       //             }
       //         }
       //     }

       //     // The final output.
       //     document.getElementById('output').innerHTML = arrValues;
       //     //console.log (arrValues);   // you can see the array values in your browsers console window. Thanks :-)
       // }


       //Intership add & clear button
       $("#rowAdder").click(function () {
           newRowAdd =
           '<div id="row"> <div class="input-group m-3">' +
           '<div class="input-group-prepend">' +
           '<button class="removeInputButton" id="DeleteRow" type="button">' +
           '<i class="bi bi-trash"></i>-</button> </div>' +
           '<textarea type="text" class="addedTeatarea" placeholder="Internship title:"></textarea> </div> </div>';

           $('#newinput').append(newRowAdd);
       });

       $("body").on("click", "#DeleteRow", function () {
           $(this).parents("#row").remove();
       })

       //certificate add & clear button
       $("#rowAdder1").click(function() {
           newRowAdd1 =
           '<div id="row1"> <div class="input-group m-3">' +
           '<div class="input-group-prepend">' +
           '<button class="removeInputButton" id="DeleteRow1" type="button">' +
           '<i class="bi bi-trash"></i>-</button> </div>' +
           '<textarea type="text" class="addedTeatarea" placeholder="Certification title:"></textarea> </div> </div>';

           $('#newinput1').append(newRowAdd1);
       });

       $("body").on("click", "#DeleteRow1", function () {
           $(this).parents("#row1").remove();
       })

       //projects add & clear button
       $("#rowAdder2").click(function() {
           newRowAdd2 =
           '<div id="row2"> <div class="input-group m-3">' +
           '<div class="input-group-prepend">' +
           '<button class="removeInputButton" id="DeleteRow2" type="button">' +
           '<i class="bi bi-trash"></i>-</button> </div>' +
           '<textarea type="text" class="addedTeatarea" placeholder="Project title:"></textarea> </div> </div>';

       $('#newinput2').append(newRowAdd2);
       });

       $("body").on("click", "#DeleteRow2", function () {
           $(this).parents("#row2").remove();
       })
       // toddle effect
       $(document).ready(function(){
       var boxWidth = $(".box").width();
       $(".slide-left").click(function(){
           $(".box").animate({
               width: 0
           });
       });
       $(".slide-right").click(function(){
           $(".box").animate({
               width: boxWidth
           });
       });
   });

