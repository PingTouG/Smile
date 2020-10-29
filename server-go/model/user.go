package model

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// User 用户表
type User struct {
	ID               string    `form:"id" json:"id" bson:"_id,omitempty"`
	CreateAt         time.Time `form:"createAt" json:"createAt"`
	UpdateAt         time.Time `form:"updateAt" json:"updateAt"`
	Username         string    `form:"username" json:"username"`
	Password         string    `form:"password" json:"password"`
	Phone            string    `form:"phone" json:"phone"`
	VerificationCode string    `form:"verificationCode" json:"verificationCode" bson:"verificationCode,omitempty"`
	Avatar           string    `form:"avatar" json:"avatar"`
}

var userDB *mongo.Collection

func init() {
	userDB = database.Collection("user")
}

// Add 添加
func (user User) Add() (err error) {
	_, err = userDB.InsertOne(context.TODO(), user)

	return
}

// Remove 删除
func (user User) Remove() (err error) {
	id, err := primitive.ObjectIDFromHex(user.ID)
	_, err = userDB.DeleteOne(context.TODO(), bson.M{"_id": id})

	return
}

// Update 更新
func (user User) Update() (User, err error) {
	return nil, nil
}

// GetList 获取用户列表
func (user User) GetList() (users []User, err error) {
	cursor, err := userDB.Find(context.TODO(), bson.M{})
	cursor.All(context.TODO(), &users)

	return
}

// GetUserInfo 获取用户详情
func (user User) GetUserInfo() (err error) {
	filter, err := bson.Marshal(user)
	fmt.Print(filter)
	if err != nil {
		return
	}

	err = userDB.FindOne(context.TODO(), filter).Decode(&user)

	return
}

// UpadteCode 发送验证码
func (user User) UpadteCode(phone string, code string) (err error) {
	filter := bson.M{"phone": phone}
	update := bson.M{
		"$set": bson.M{
			"verificationCode": code,
		},
	}

	_, err = userDB.UpdateOne(context.TODO(), filter, update)

	return
}

// PhoneLogin 手机号登录
func (user User) PhoneLogin(phone string, code string) (err error) {
	filter := bson.M{"phone": phone, "verificationCode": code}
	err = userDB.FindOne(context.TODO(), filter).Decode(&user)

	if err == nil {
		user.UpadteCode(phone, "")
	}

	return err
}

// Login 账号密码登录
func (user User) Login(username string, password string) (err error) {
	filter := bson.M{"username": username, "password": password}
	err = userDB.FindOne(context.TODO(), filter).Decode(&user)

	return
}
