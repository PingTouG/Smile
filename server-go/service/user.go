package service

import (
	"server/model"
	"time"
)

// UserService 服务
type UserService struct {
	Model model.User
}

// Add 添加用户
func (service UserService) Add() (err error) {
	service.Model.CreateAt = time.Now()
	service.Model.UpdateAt = service.Model.CreateAt

	return service.Model.Add()
}

// Remove 删除用户
func (service UserService) Remove() (err error) {
	return service.Model.Remove()
}

// GetList 获取用户列表
func (service UserService) GetList() (users []model.User, err error) {
	users, err = service.Model.GetList()
	return users, err
}
