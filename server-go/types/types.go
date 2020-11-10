package types

// PhoneLoginParams 手机号登录参数
type PhoneLoginParams struct {
	Phone string `form:"phone"`
	Code  string `form:"code"`
}

// LoginParams 账号密码登录参数
type LoginParams struct {
	Username string `form:"username"`
	Password string `form:"password"`
}
