const User = require('../models/User');
const { mongooseToObject } = require('../../utill/mongoose')



class userControll {
    register(req, res){
        res.render('user/register');
    }
   
    login(req, res, next) {
        res.render('user/login')
    }

    store(req, res, next){//đăng kí
        const formData = req.body;
        const user = new User({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          name: formData.name,
          ngay_sinh: formData.ngay_sinh,
          so_dien_thoai: formData.so_dien_thoai,
          gioi_tinh: formData.gioi_tinh
        });
        user.save();
        return res.redirect('/user');
      }

    ktlogin(req, res, next){
        const username = req.body.username;
        const password = req.body.password;
      
        User.findOne({ username: username, password: password })
          .then(data => {
            if (data) {
              req.session.user = data;
              return res.redirect('/');
            } else {
              res.send("<script>alert('tên hoặc mật khẩu sai!');window.location.href='/user'</script>")
            }
          })
          .catch(err => {
            res.status(500).json('Lỗi server');
          });
    }
   


}
// module.exports xuất ra ngoài exports cái gì thì khi require chúng ta nhận được cái đó
module.exports = new userControll