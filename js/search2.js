 $(function() { // document ready
     console.log('klar?');
     
     
     var source = [
         {
             value: "../fladpensel.html",
             label: "70mm Fladpensel Blandingsbørster"
               },
         {
             value: "../newton.html",
             label: "Newton Bordlampe",
                 },
         {
             value: "../traegrunder.html",
             label: "SC Trægrunder Farveløs 5L"
               },
         {
             value: "../haandklaede.html",
             label: "Håndklædetørre 785x500 Tino 12-500, Rustfri"
               },
         {
             value: "../yacht-flag.html",
             label: "Yacht-flag Danmark 150cm"
               },
         {
             value: "../fodliste.html",
             label: "Fodliste Almue MDF Hvid 16x68x2800mm"
               },
         {
             value: "../hylde.html",
             label: "Hylde M-Design - Sort 800x300x15mm"
               },
         {
             value: "../toiletsaede.html",
             label: "Orkide Toiletsæde M/Softclose, Poseidon"
               },
         {
             value: "../olie.html",
             label: "Kompressorolie 1L Ardeca Comprol EP"
               },
         {
             value: "../box.html",
             label: "Equipmentbox Pro-Work WI"
               }
    ];


     $("#search-vare")      //Input felt på viby.html
         .autocomplete({
            source: source,
         select: function (event, ui) {
             window.location.href = ui.item.value; }
        })
     
     /* FORSØG MED SWITCH
     
        .change(function (e) {
            switch (e.which) {
             case "Newton Bordlampe":
                    console.log('newton bordlampe');

                 $("#row1a .a7").css({
                     "background-color": "#df0023"
                 });

                 break;

             case "Yacht-flag Danmark 150cm":

                 $("#row6a .a6").css({
                     "background-color": "#df0023"
                 });

                 break;
         }
     });
     
     $("#search-vare").on('keyup', function(e) {
         console.log('Hej');
         switch(e.which) {
             //console.log(e);
         }
     });
     */



 }); // doc read end
