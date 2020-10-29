package controller

import (
	"net/http"
	"server/config"
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

// Add 添加用户
func (user UserController) Add(ctx *gin.Context) {
	ctx.ShouldBind(&user.service.Model)

	if err := user.service.Add(); err != nil {
		SetErrorJSON(ctx, http.StatusInternalServerError, err.Error())
	} else {
		SetOkJSON(ctx, nil)
	}
}

// Remove 删除用户
func (user UserController) Remove(ctx *gin.Context) {
	user.service.Model.ID = ctx.Param("id")

	if err := user.service.Remove(); err != nil {
		SetErrorJSON(ctx, http.StatusInternalServerError, err.Error())
	} else {
		SetOkJSON(ctx, nil)
	}
}

// GetList 获取用户列表
func (user UserController) GetList(ctx *gin.Context) {
	if users, err := user.service.GetList(); err != nil {
		SetErrorJSON(ctx, http.StatusInternalServerError, err.Error())
	} else {
		SetOkJSON(ctx, users)
	}
}

// SendCode 发送验证码
func (user UserController) SendCode(ctx *gin.Context) {
	phone := ctx.Param("phone")

	if users, err := user.service.SendCode(phone); err != nil {
		SetErrorJSON(ctx, http.StatusInternalServerError, err.Error())
	} else {
		SetOkJSON(ctx, users)
	}
}

// PhoneLogin 手机号登录
func (user UserController) PhoneLogin(ctx *gin.Context) {
	var form PhoneLoginParams
	if ctx.ShouldBind(&form) == nil {
		if user, err := user.service.PhoneLogin(form.Phone, form.Code); err != nil {
			SetErrorJSON(ctx, http.StatusInternalServerError, "验证码错误")
		} else {
			config := config.AppConfig{}
			config.GetConfig()
			if token, err := utils.CreateToken([]byte(config.Salt), config.Salt, user.ID); err != nil {
				SetErrorJSON(ctx, http.StatusInternalServerError, "服务器错误,请稍后重试")
			} else {
				SetOkJSON(ctx, gin.H{
					"user":  user,
					"token": token,
				})
			}

		}
	} else {
		SetErrorJSON(ctx, http.StatusInternalServerError, "参数错误")
	}
}
