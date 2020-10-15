package model

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User 用户表
type User struct {
	ID       primitive.ObjectID `form:"id" json:"id" bson:"_id,omitempty"`
	CreateAt time.Time          `form:"createAt" json:"createAt"`
	UpdateAt time.Time          `form:"updateAt" json:"updateAt"`
	Username string             `form:"username" json:"username"`
	Password string             `form:"password" json:"password"`
	Phone    string             `form:"phone" json:"phone"`
	Avatar   string             `form:"avatar" json:"avatar"`
}

// Add 添加
func (user User) Add() (err error) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	_, err = database.Collection("user").InsertOne(ctx, user)

	return err
}

// Remove 删除
func (user User) Remove() (err error) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	_, err = database.Collection("user").DeleteOne(ctx, bson.M{"_id": user.ID})

	return err
}

// GetList 获取用户列表
func (user User) GetList() (users []User, err error) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	cursor, err := database.Collection("user").Find(ctx, bson.M{})

	cursor.All(ctx, &users)

	return users, err
}
