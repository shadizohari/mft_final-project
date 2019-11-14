function validateEmail($this) {
    $("#email").removeClass("redBorder");
    var email = $this.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(re.test(String(email).toLowerCase()))) {
        $("#email").addClass("redBorder");
        $this.value = "";
    }
}