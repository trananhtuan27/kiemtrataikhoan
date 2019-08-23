function demo(account) {
    let regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(account)){
        return "tài khoản đúng :" + account
    } else {
        return "tài khoản sai :" + account
    }
}
let accountTest = "trananhtuan";
document.write(demo(accountTest));
