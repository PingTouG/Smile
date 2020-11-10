package app

import (
	"net/http"
	"server/controller/common"
	"server/emnus"
	"server/service"
	"server/types"

	"github.com/gin-gonic/gin"
)

// UserController 用户控制器
type UserController struct {
	service service.UserService
}

// Add 添加用户
func (user UserController) Add(ctx *gin.Context) {
	common := common.UserController{}
	common.Add(ctx, emnus.RoleNormal)
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
	var form types.PhoneLoginParams
	if ctx.ShouldBind(&form) == nil {
		if user, err := user.service.PhoneLogin(form.Phone, form.Code); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error(), "data": nil})
		} else {
			common.LoginSuccess(ctx, user)
		}
	} else {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "参数错误", "data": nil})
	}
}
