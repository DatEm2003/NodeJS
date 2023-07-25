

function checkuser(req, res, next) {
    if (!req.session || !req.session.user) {
      res.send("<script>alert('Bạn Chưa Đăng nhập!');window.location.href='/user'</script>")
    }
    next();
  }
  module.exports = checkuser;