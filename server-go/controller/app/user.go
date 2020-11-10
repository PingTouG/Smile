package appcontroller

import (
	"net/http"
	"server/config"
	"server/model"
	"server/service"
	"server/utils"

	"github.com/gin-gonic/gin"
)

// UserController 用户控制器
type UserController struct {
	service service.UserService
}

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

// Add 添加用户
func (user UserController) Add(ctx *gin.Context) {
	ctx.ShouldBind(&user.service.Model)

	if err := user.service.Add(); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
	} else {
		ctx.JSON(http.StatusOK, gin.H{"data": nil, "message": "添加用户成功"})
	}
}

// Remove 删除用户
func (user UserController) Remove(ctx *gin.Context) {
	user.service.Model.ID = ctx.Param("id")

	if err := user.service.Remove(); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
	} else {
		ctx.JSON(http.StatusOK, gin.H{"data": nil, "message": "删除用户"})
	}
}

// GetList 获取用户列表
func (user UserController) GetList(ctx *gin.Context) {
	if users, err := user.service.GetList(); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
	} else {
		ctx.JSON(http.StatusOK, gin.H{"data": users, "message": nil})
	}
}

// SendCode 发送验证码
func (user UserController) SendCode(ctx *gin.Context) {
	phone := ctx.Param("phone")

	if users, err := user.service.SendCode(phone); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
	} else {
		ctx.JSON(http.StatusOK, gin.H{"data": users, "message": nil})
	}
}

// PhoneLogin 手机号登录
func (user UserController) PhoneLogin(ctx *gin.Context) {
	var form PhoneLoginParams
	if ctx.ShouldBind(&form) == nil {
		if user, err := user.service.PhoneLogin(form.Phone, form.Code); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
		} else {
			loginSuccess(ctx, user)
		}
	} else {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "参数错误", "data": nil})
	}
}

// Login 账号密码登录
func (user UserController) Login(ctx *gin.Context) {
	var form LoginParams
	if ctx.ShouldBind(&form) == nil {
		if user, err := user.service.Login(form.Username, form.Password); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
		} else {
			loginSuccess(ctx, user)
		}
	} else {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "参数错误", "data": nil})
	}
}

// loginSuccess 登录成功
func loginSuccess(ctx *gin.Context, user model.User) {
	config := config.AppConfig{}
	config.GetConfig()
	if token, err := utils.CreateToken([]byte(config.Salt), config.Salt, user.ID); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "服务器错误,请稍后重试", "data": nil})
	} else {
		ctx.JSON(http.StatusOK, gin.H{"data": gin.H{
			"user":  user,
			"token": token,
		}, "message": nil})
	}
}
