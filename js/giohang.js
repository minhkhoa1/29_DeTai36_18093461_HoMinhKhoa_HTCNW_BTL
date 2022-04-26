function Ktsoluong() {
    if (document.getElementById("Ktsoluong1").value > 99)
        document.getElementById("Ktsoluong1").value = 99;
    if (document.getElementById("Ktsoluong1").value < 1)
        document.getElementById("Ktsoluong1").value = 1;

    if (document.getElementById("Ktsoluong").value > 99)
        document.getElementById("Ktsoluong").value = 99;
    if (document.getElementById("Ktsoluong").value < 1)
        document.getElementById("Ktsoluong").value = 1;
}
// 
function kttienhang() {
    var tien = Number(0);
    tien += Number(116) * Number(document.getElementById("Ktsoluong").value);
    tien += Number(132) * Number(document.getElementById("Ktsoluong1").value);
    document.getElementById("tienhang").innerHTML = tien + ".000 VNĐ";
    return tien;
}

function tongcong() {
    var tong = kttienhang();
    if (tong == 0) {
        alert("Có lỗi xảy ra");
        return false;
    } else {
        tong += 20 + 0 + 0;
        document.getElementById("tongtien").innerHTML = tong + ".000 VNĐ";
        document.getElementById("tongtiencheck").innerHTML = tong + ".000 VNĐ";
    }
}