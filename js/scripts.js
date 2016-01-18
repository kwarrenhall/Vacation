
// source of code more branching
    $(document).ready(function() {
      $("form#vacation").submit(function(event) {
        var budget = $("select#budget").val();
        var sunsnow = $("select#sunsnow").val();
        var crowds = $("select#crowds").val();
        var nature = $("select#nature").val();
        var dependents = $("select#dependents").val();

        // $(".results").children("div").hide();
        $(".results").hide();



        if ((budget === "lots") && (sunsnow === "sun") && (crowds === "xenophobic") && (nature === "poet") && (dependents === "animals")) {
         $(".safari").show();
         $(".safari").show();
         $(".safari").show();
        }
        else {
        $(".oasis").show();}



        // if ((budget === "lots") && (sunsnow === "sun") && (crowds === "xenophobic") && (nature === "poet") && (dependents === "dependents")) {
        // $(".safari").show();
        // }

        //
        // else if ((budget === "less") && (sunsnow === "sun") && (crowds === "xenophobic")) {
        //  $(".oasis").show();
        // } else if ((budget === "more") && (sunsnow === "sun") && (crowds === "people")) {         $(".burningman").show();
        // } else if ((budget === "less") && (nature === "superhero") && (dependents === "children")) {
        //  $(".comicon").show();
        // } else if ((budget === "more") && (sunsnow === "snow") && crowds === "xenophobic")) {
        //   $(".kremlin").show();
        // } else if ((budget === "more") && (nature === "superhero")(dependents === "animals")) {
        //   $(".safari").show();
        // } else if ((nature === "poet") && (sunsnow === "xenophobic") && (dependants === "animals")) {
        //  $(".animalshelter").show();



      event.preventDefault();
      });
    });
