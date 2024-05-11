$(document).ready(function () {
    $(document).ready(function () {

        $.validator.addMethod("StrongPassword", function (value) {
            return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value)
        }, "Please Enter Strong Password");

        $("#form1").validate({
            rules: {
                myname: {
                    required: true,
                    minlength: 3,
                    maxlength: 10
                },

                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    StrongPassword: true
                },
                conf_pass: {
                    required: true,
                    equalTo: "#password"
                },
                fname: {
                    required: true,
                    nowhitespace: true
                },
                ltr: {
                    required: true,
                    lettersonly: true
                },
                alpha: {
                    required: true,
                    alphanumeric: true
                },
                punc: {
                    required: true,
                    letterswithbasicpunc: true
                },
                url: {
                    required: true,
                    url: true
                },
                num1: {
                    required: true,
                    lessThan: "#data"
                },
                'Gender[]': {
                    required: true,
                },
                check: {
                    required: true
                },
                age: {
                    required: true,
                    //  range:[10,50]
                    min: 10,
                    max: 50
                },
                step: {
                    required: true,
                    step: 10
                },
                num: {
                    required: true,
                    number: true
                },
                number: {
                    required: true,
                    digits: true
                },
                date: {
                    required: true,
                    date: true
                }

            },


            highlight: function (element) {
                $(element).addClass("c1");
                $(element).removeClass("c2");
            },

            unhighlight: function (element) {
                $(element).addClass("c2");
            },

            invalidHandler: function (element) {
                var validator = $("#form1").validate();
                $("#summary").text(validator.numberOfInvalids() + " fields are invalid...");

            },

            messages: {
                myname: {
                    required: "Name is mandatory",
                    minlength: "3 Character must"
                },
                email: {
                    required: "Email is mandatory",
                    email: "Invalid Email"
                },
                password: {
                    required: "Password is mandatory"
                },
                conf_pass: {
                    required: "Confrim Password is mandatory",
                    equalTo: "Both Password Must be identical"
                },
            }
        });
    });
});