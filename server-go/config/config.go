package config

import (
	"fmt"

	"github.com/spf13/viper"
)

// AppConfig 程序配置
type AppConfig struct {
	Server ServerConfig
}

// ServerConfig 服务配置
type ServerConfig struct {
	Port string
}

// GetConfig 获取配置信息
func (app *AppConfig) GetConfig() {
	viper.SetConfigType("yaml")
	viper.AddConfigPath("config")
	viper.SetConfigName("config")

	if err := viper.ReadInConfig(); err != nil {
		fmt.Println("读取配置文件失败：" + err.Error())
	}
	viper.Unmarshal(app)
}
