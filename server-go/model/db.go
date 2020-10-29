package model

import (
	"context"
	"fmt"
	"log"
	"server/config"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	database *mongo.Database
	err      error
)

func init() {
	config := config.AppConfig{}
	config.GetConfig()

	Connect(config.Db)
}

// Connect 连接数据库
func Connect(config config.DbConfig) {
	clientOptions := options.Client().ApplyURI("mongodb://" + config.Host + ":" + config.Port)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	database = client.Database(config.Database)
	fmt.Println("数据库连接成功!")
}
