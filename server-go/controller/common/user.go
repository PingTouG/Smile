package common

import (
	"net/http"
	"server/config"
	"server/model"
	"server/service"
	"server/types"
	"server/utils"

	"github.com/gin-gonic/gin"
)

// UserController 用户控制器
type UserController struct {
	service service.UserService
}

// Login 账号密码登录
func (user UserController) Login(ctx *gin.Context) {
	var form types.LoginParams
	if ctx.ShouldBind(&form) == nil {
		if user, err := user.service.Login(form.Username, form.Password); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
		} else {
			LoginSuccess(ctx, user)
		}
	} else {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "参数错误", "data": nil})
	}
}

// LoginSuccess 登录成功
func LoginSuccess(ctx *gin.Context, user model.User) {
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

// Add 添加用户
func (user UserController) Add(ctx *gin.Context, role string) {
	ctx.ShouldBind(&user.service.Model)
	user.service.Model.Role = role

	if err := user.service.Add(); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
	} else {
		var message string
		if role == "normal" {
			message = "注册成功"
		} else {
			message = "添加用户成功"
		}

		ctx.JSON(http.StatusOK, gin.H{"data": nil, "message": message})
	}
}
