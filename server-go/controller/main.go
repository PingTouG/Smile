package controller

import (
	appcontroller "server/controller/app"

	"github.com/gin-gonic/gin"
)

// UseRouter 路由
func UseRouter(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	{
		app := v1.Group("")
		{
			users := app.Group("/users")
			{
				userController := appcontroller.UserController{}
				users.POST("/add", userController.Add)
				users.DELETE("/:id", userController.Remove)
				users.GET("/", userController.GetList)
				users.POST("/send-code/:phone", userController.SendCode)
				users.POST("/phone-login", userController.PhoneLogin)
				users.POST("/login", userController.Login)
			}
		}
	}
}
