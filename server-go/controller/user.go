package controller

import (
	"net/http"
	"server/service"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// UserController 用户控制器
type UserController struct {
	service service.UserService
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
	if id, err := primitive.ObjectIDFromHex(ctx.Param("id")); err != nil {
		SetErrorJSON(ctx, http.StatusInternalServerError, err.Error())
	} else {
		user.service.Model.ID = id
	}

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
