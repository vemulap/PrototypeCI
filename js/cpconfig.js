/**
 * Created by pvemula on 11/12/14.
 */
$("#myselect").on("change", function() {
    $("#" + $(this).val()).show().siblings().hide();
})