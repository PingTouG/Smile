package main

import (
	"net/http"
	"server/config"

	"github.com/gin-gonic/gin"
)

func main() {
	config := config.AppConfig{}
	config.GetConfig()

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World",
		})
	})

	app := &http.Server{
		Addr:    ":" + config.Server.Port,
		Handler: router,
	}

	app.ListenAndServe()
}
