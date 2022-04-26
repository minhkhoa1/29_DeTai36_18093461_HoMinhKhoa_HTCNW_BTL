// JavaScript source code
// form login

// submenu drop down
$(document).ready(function() {
    $('.dropdown-submenu a.test').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

//---đăng nhập
function dangnhap_() {
    alert("vui lòng đăng nhập ở trang chủ");
    return false;
}

function testtk() {
    var reg = /^\w+(\.\w+)?(@)[a-zA-Z]{2,8}\.\w+(\.\w{2,8})?$/;
    var regnumber1 = /^\+?(8)(4)\d{9}$/g;
    var regnumber2 = /^(0)\d{9}$/g;
    var tk = document.getElementById("txttk").value;
    if (reg.test(tk)) {
        document.getElementById("tbtk").innerHTML = "";
        return true;
    } else if (regnumber1.test(tk) || regnumber2.test(tk)) {
        document.getElementById("tbtk").innerHTML = "";
        return true;
    }
    document.getElementById("tbtk").innerHTML = "(Tài khoản không hợp lệ)";
    return false;

}

function testsdt() {
    var regnumber2 = /^(0)\d{9}$/g;
    if (regnumber2.test(tk)) {
        document.getElementById("tbsdt").innerHTML = "";
        return true;
    }
    document.getElementById("tbsdt").innerHTML = "( sdt không hợp lệ)";
    return false;
}

function testmk() {
    if (document.getElementById("txtmk").value == "") {
        document.getElementById("tbmk").innerHTML = "(Chưa nhập)";
        return false;
    }
    document.getElementById("tbmk").innerHTML = "";
    return true;

}

function testdkmk() {
    if (document.getElementById("txtmk").value == "") {
        document.getElementById("tbmk").innerHTML = "(Chưa nhập)";
        return false;
    }
    var mk = document.getElementById("txtmk").value.length;
    if (mk < 4) {
        document.getElementById("tbmk").innerHTML = "(Ít nhất 4 ký tự)";
        return false;
    }
    document.getElementById("tbmk").innerHTML = "";
    return true;
}

function logintk() {
    if (!testmk || !testtk)
        return false;

    return true;
}

// đăng ký------------

// kt tai khoan -> đăng nhập

function re_testmk() {
    var mk = document.getElementById("txtmk").value;
    var re_mk = document.getElementById("re_txtmk").value;
    if (mk != re_mk || mk == "") {
        document.getElementById("re_tbmk").innerHTML = "(Mật khẩu không hợp lệ)";
        return false;
    }
    document.getElementById("re_tbmk").innerHTML = "";
    return true;
}

function testname() {
    reg = /^[a-zA-Z]+?\'?\ ?[[a-zA-Z]+?\'?\ ?]?[[a-zA-Z]+?\'?\ ?]?[[a-zA-Z]+?\'?\ ?]?[[a-zA-Z]+?\'?\ ?]?$/g;
    if (!reg.test(document.getElementById("txtname").value)) {
        document.getElementById("tbname").innerHTML = "(Không hợp lệ)";
        return false;
    }
    document.getElementById("tbname").innerHTML = "";
    return true;
}

// add sanpham vao id gio hang
// giỏ hàng
// var pr_sl = [0, 0];

// function add_giohang() {
//     var pr_arr = new Array();
//     var pr_arr[0] =
//         if ()
// }
var add_giohang_value = 0;

function add_giohang() {
    if (document.getElementById("pr1").value == 0) {
        add_giohang_value++;
        document.getElementById("pr1").value = 1;
        document.getElementById("slsanpham").innerHTML = add_giohang_value;
        return;
    }

}