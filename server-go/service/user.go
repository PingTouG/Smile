package service

import (
	"fmt"
	"math/rand"
	"server/model"
	"time"
)

// UserService 服务
type UserService struct {
	Model model.User
}

// Add 添加用户
func (service UserService) Add() error {
	service.Model.CreateAt = time.Now()
	service.Model.UpdateAt = service.Model.CreateAt

	return service.Model.Add()
}

// Remove 删除用户
func (service UserService) Remove() error {
	return service.Model.Remove()
}

// GetList 获取用户列表
func (service UserService) GetList() ([]model.User, error) {
	return service.Model.GetList()
}

// SendCode 发送验证码
func (service UserService) SendCode(phone string) (code string, err error) {
	service.Model.Phone = phone
	service.Model.GetUserInfo()

	// 未查询到则添加
	if service.Model.ID == "" {
		err = service.Add()

		if err != nil {
			return
		}
	}

	rnd := rand.New(rand.NewSource(time.Now().UnixNano()))
	code = fmt.Sprintf("%06v", rnd.Int31n(1000000))
	err = service.Model.UpadteCode(phone, code)

	return
}

// PhoneLogin 手机号登录
func (service UserService) PhoneLogin(phone string, code string) (model.User, error) {
	return service.Model.PhoneLogin(phone, code)
}
