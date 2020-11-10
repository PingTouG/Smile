package admin

import (
	"net/http"
	"server/controller/common"
	"server/emnus"
	"server/service"

	"github.com/gin-gonic/gin"
)

// UserController 用户控制器
type UserController struct {
	service service.UserService
}

// Add 添加用户
func (user UserController) Add(ctx *gin.Context) {
	common := common.UserController{}
	common.Add(ctx, emnus.RoleAdmin)
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
