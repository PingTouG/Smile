package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// UseRouter 路由
func UseRouter(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	{
		users := v1.Group("/users")
		{
			userController := UserController{}
			users.POST("/add", userController.Add)
			users.DELETE("/:id", userController.Remove)
			users.GET("/", userController.GetList)
			users.POST("/send-code/:phone", userController.SendCode)
			users.POST("/phone-login", userController.PhoneLogin)
		}
	}
}

// SetOkJSON 设置成功响应
func SetOkJSON(ctx *gin.Context, data interface{}) {
	ctx.JSON(http.StatusOK, gin.H{"data": data, "message": nil})
}

// SetErrorJSON 设置失败响应
func SetErrorJSON(ctx *gin.Context, code int, message string) {
	ctx.JSON(code, gin.H{"message": message, "data": nil})
}
