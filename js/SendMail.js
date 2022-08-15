function setUpForSendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  var emailContent =
    "Tên: " +name +
    "<br>" +
    "Email: " +email +
    "<br>" +
    "Evaluate: " +message;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "cloneusersfromweb@gmail.com", //email để gửi đi testtest344466445554446644
    Password: "-isCEg-4Vmu_i48", //mật khẩu để gửi đi Linhlinh125151
    To: "nguyenlenhattruong12b3ts19@gmail.com", //email nhận
    From: "cloneusersfromweb@gmail.com", //email gửi
    Subject: "Evaluate From User", //subject mail
    Body: emailContent, //body mail
  }).then((message) => checkSuccess(message));
}

function checkSuccess(message) {
  if (message == "OK") {
    Swal.fire({
        imageUrl: 'images/Bank.png',
        imageHeight: 500,
        padding: '3em',
        icon: 'success',
        title: 'Thành công',
        text: 'Bạn đã gửi thành công vài nghìn $ vào tài khoản!',
        confirmButtonColor: '#d75b99',
        confirmButtonText: 'Cảm ơn nhiều nhé',
        backdrop: 'url("images/817.gif")',
    });
  } else {
    Swal.fire("Oops!", "Có lỗi rồi, vui lòng thử lại nhé.", "error");
  }
}