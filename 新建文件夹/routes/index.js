var express = require('express');
var router = express.Router();
var multer = require('multer')
var axios = require('axios')

const storage = multer.diskStorage({
  // destination:'public/uploads/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
  destination(req, res, cb) {
    cb(null, './upload/');
  },
  filename(req, file, cb) {
    // const filenameArr = file.originalname.split('.');
    cb(null, Date.now() + file.originalname);
  }
})

const upload = multer({ storage });



router.post('/uploads', upload.array('file'), function (req, res, next) {
  res.send(req.files);
  // res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/redCode', function (req, res, next) {
  // res.render('index', { code: 'Express' });
  // res.send(req.query.code);
  // ;
  res.send(req.query.code);

  res.redirect(`/getCode?code=${req.query.code}`)
});

router.get('/wechat_login', function (req, res, next) {
  const appid = 'ww44ef3f3c9468b56c'
  // 第一步：用户同意授权，获取code
  var router = 'get_wx_access_token';
  // 这是编码后的地址
  res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent('http://2917776lf5.wicp.vip/') + router}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`);
});

router.get('/get_wx_access_token', function (req, res, next) {
  // if (!req.session.access_token) {
    const appid = 'ww44ef3f3c9468b56c'
    const secret = 'xEtS5_rQz98usfNm1Ce8lXQAMpdXs2ihWeqcZgrKFng'

    axios.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${appid}&corpsecret=${secret}`)
      .then(res2 => {
        // 拿到token
        req.session.access_token = res2.data.access_token;
        console.log('token1',res2.data.access_token)
        axios.get(`https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${res2.data.access_token}&code=${req.query.code}`).then(res3 => {
          console.log("用户信息1")
          res.send({ msg: "用户信息", res: res3.data });
        })

      }).catch(err => {

        res.send(err)
      })

  // } else {
  //   console.log('token2',req.session.access_token)
  //   axios.get(`https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${req.session.access_token}&code=${req.query.code}`).then(res3 => {
  //     console.log("用户信息2")
     
  //   res.send({ msg: "用户信息", res: res3.data });
  //   })
  // }
})




  // 第二步：通过code换取网页授权access_token
  // var code = req.query.code;

  // request.get(
  //   {
  //     url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + AppID + '&secret=' + AppSecret + '&code=' + code + '&grant_type=authorization_code',
  //   },
  //   function (error, response, body) {
  //     if (response.statusCode == 200) {
  //       // 第三步：拉取用户信息(需scope为 snsapi_userinfo)
  //       //console.log(JSON.parse(body));
  //       var data = JSON.parse(body);
  //       var access_token = data.access_token;
  //       var openid = data.openid;
  //       request.get(
  //         {
  //           url: 'https://api.weixin.qq.com/sns/userinfo?access_token=' + access_token + '&openid=' + openid + '&lang=zh_CN',
  //         },
  //         function (error, response, body) {
  //           if (response.statusCode == 200) {
  //             // 第四步：根据获取的用户信息进行对应操作
  //             var userinfo = JSON.parse(body);
  //             console.log('获取微信信息成功！');
  //             //其实，到这就写完了，你应该拿到微信信息以后去干该干的事情，比如对比数据库该用户有没有关联过你们的数据库，如果没有就让用户关联....等等等...
  //             // 小测试，实际应用中，可以由此创建一个帐户
  //             res.send("\
  //                             <h1>"+ userinfo.nickname + " 的个人信息</h1>\
  //                             <p><img src='"+ userinfo.headimgurl + "' /></p>\
  //                             <p>"+ userinfo.city + "，" + userinfo.province + "，" + userinfo.country + "</p>\
  //                             <p>openid: "+ userinfo.openid + "</p>\
  //                         ");
  //           } else {
  //             console.log(response.statusCode);
  //           }
  //         }
  //       );
  //     } else {
  //       console.log(response.statusCode);
  //     }
  //   }
  // );


  router.get('/getCode', function (req, res, next) {
    if (req.query.code) {
      res.send(req.query.code);
    } else {
      const redirectUri = 'http://2917776lf5.wicp.vip/redCode'

      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent('http://2917776lf5.wicp.vip/getCode')}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
      res.redirect(url)
    }

  });



  router.get('/auth', function (req, res, next) {

    const appid = 'ww44ef3f3c9468b56c'
    const secret = 'xEtS5_rQz98usfNm1Ce8lXQAMpdXs2ihWeqcZgrKFng'
    axios.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${appid}&corpsecret=${secret}`)
      .then(res2 => {
        console.log("res2", res2.data)
        res.send(res2.data)
      }).catch(err => {

        res.send(err)
      })



  });


  
  router.get('/', function (req, res, next) {
res.send('4444')
  });


  module.exports = router;
