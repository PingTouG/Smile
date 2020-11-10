package controller

import (
	"server/controller/app"
	"server/controller/common"

	"github.com/gin-gonic/gin"
)

// UseRouter 路由
func UseRouter(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	{
		commonUserController := common.UserController{}

		appGroup := v1.Group("/app")
		{
			users := appGroup.Group("/users")
			{
				userController := app.UserController{}
				users.POST("/add", userController.Add)
				users.GET("/", userController.GetList)
				users.POST("/send-code/:phone", userController.SendCode)
				users.POST("/phone-login", userController.PhoneLogin)
				users.POST("/login", commonUserController.Login)
			}
		}
	}
}
