$(function() {

	$(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id();
    });

    $(document).ready(function() {
		$('.gallery-link').magnificPopup({
			type:'image',
			gallery: {
		    	enabled: true
		    }
		});
	});

	$('input[name="checkbox-test"]').change(function() {
        $(this).is(":checked") ? $(this).closest("form").find(".submit").css("cursor", "pointer").css("opacity", "1").attr("disabled", !1) : $(this).closest("form").find(".submit").css("cursor", "default").css("opacity", ".7").attr("disabled", !0)
    });

    $("#form").submit(function() {
        var th = $(this);
        $.ajax({type: "POST", url: "../mail.php", data: th.serialize()}).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
