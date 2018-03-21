 $(function () {
     var source = [
         {
             value: "../varehuse/aalborg.html",
             label: "Aalborg"
               },
         {
             value: "../varehuse/esbjerg.html",
             label: "Esbjerg"
               },
         {
             value: "../varehuse/glostrup.html",
             label: "Glostrup"
               },
         {
             value: "../varehuse/herning.html",
             label: "Herning"
               },
         {
             value: "../varehuse/hilleroed.html",
             label: "Hillerød"
               },
         {
             value: "../varehuse/hjoerring.html",
             label: "Hjørring"
               },
         {
             value: "../varehuse/holbaek.html",
             label: "Holbæk"
               },
         {
             value: "../varehuse/ishoej.html",
             label: "Ishøj"
               },
         {
             value: "../varehuse/kolding.html",
             label: "Kolding"
               },
         {
             value: "../varehuse/naestved.html",
             label: "Næstved"
               },
         {
             value: "../varehuse/odense.html",
             label: "Odense"
               },
         {
             value: "../varehuse/randers.html",
             label: "Randers"
               },
         {
             value: "../varehuse/roskilde.html",
             label: "Roskilde"
               },
         {
             value: "../varehuse/tilst.html",
             label: "Tilst"
               },
         {
             value: "../varehuse/valby.html",
             label: "Valby"
               },
         {
             value: "../varehuse/vejle.html",
             label: "Vejle"
               },
         {
             value: "../varehuse/viby.html",
             label: "Viby"
               },
    ];


     $("#search-forside").autocomplete({
         source: source,
         select: function (event, ui) {
             window.location.href = ui.item.value;
         }
     });
 });
