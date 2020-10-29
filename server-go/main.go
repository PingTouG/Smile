package main

import (
	"server/config"
	"server/controller"

	"github.com/gin-gonic/gin"
)

func main() {
	config := config.AppConfig{}
	config.GetConfig()

	server := gin.New()
	server.Use(gin.Logger())
	server.Use(gin.Recovery())

	controller.UseRouter(server)

	server.Run(config.Server.Host + ":" + config.Server.Port)
}
