
    $(document).ready(function() {
      $("form#vacation").submit(function(event) {
        var budget = $("select#budget").val();
        var sunsnow = $("select#sunsnow").val();
        var crowds = $("select#crowds").val();
        var nature = $("select#nature").val();
        var dependents = $("select#dependents").val();

    
        $(".results").hide();


// start of lots--
        if ((budget === "lots") && (sunsnow === "sun") && (crowds === "xenophobic") && (nature === "poet") && (dependents === "animal")) {
         $(".animalshelter").show();
       } else if ((budget === "lots") && (sunsnow === "sun") &&  (crowds === "xenophobic") && (nature === "poet") && (dependents === "children")) {
          $(".burningman").show();
        } else if ((budget === "lots") && (sunsnow === "sun") &&  (crowds === "xenophobic") && (nature === "superhero") && (dependents === "animal")) {
           $(".comicon").show();
         } else if ((budget === "lots") && (sunsnow === "sun") &&  (crowds === "people") && (nature === "poet") && (dependents === "animal")) {
            $(".oasis").show();
          } else if ((budget === "lots") && (sunsnow === "snow") &&  (crowds === "xenophobic") && (nature === "poet") && (dependents === "animal")) {
             $(".safari").show();
// start of less-
           } else if ((budget === "less") && (sunsnow === "sun") && (crowds === "xenophobic") && (nature === "poet") && (dependents === "animal")) {
              $(".safari").show();
            } else if ((budget === "less") && (sunsnow === "sun") &&  (crowds === "xenophobic") && (nature === "poet") && (dependents === "children")) {
               $(".burningman").show();
             } else if ((budget === "less") && (sunsnow === "sun") &&  (crowds === "xenophobic") && (nature === "superhero") && (dependents === "animal")) {
                $(".comicon").show();
              } else if ((budget === "less") && (sunsnow === "sun") &&  (crowds === "people") && (nature === "poet") && (dependents === "animal")) {
                 $(".oasis").show();
               } else if ((budget === "less") && (sunsnow === "snow") &&  (crowds === "xenophobic") && (nature === "poet") && (dependents === "animal")) {
                  $(".safari").show();
         } else {
           $(".safari").show();
         }


      event.preventDefault();
     });
 });
