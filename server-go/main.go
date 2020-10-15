package main

import (
	"server/config"
	"server/controller"
	"server/model"

	"github.com/gin-gonic/gin"
)

func main() {
	config := config.AppConfig{}
	config.GetConfig()

	model.Connect(config.Db)

	server := gin.New()
	server.Use(gin.Logger())
	server.Use(gin.Recovery())

	controller.Router(server)

	server.Run(config.Server.Host + ":" + config.Server.Port)
}
