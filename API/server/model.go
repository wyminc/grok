package server

import "gopkg.in/mgo.v2/bson"

type card struct {
	Id         bson.ObjectId `json:"_id" bson:"_id"`
	User_id    int           `json:"user_id" bson:"user_id"`
	Data       data          `json:"data" bson:"data"`
	Css        style         `json:"css" bson:"css"`
	Users      []int         `json:"users" bson:"users"`
	Is_deleted bool          `json:"is_deleted" bson:"is_deleted"`
}

type data struct {
	Company_Name string `json:"company_name" bson:"company_name"`
	Name         string `json:"name" bson:"name"`
	Title        string `json:"title" bson:"title"`
	Address      string `json:"address" bson:"address"`
	Phone        string `json:"phone" bson:"phone"`
	Email        string `json:"email" bson:"email"`
}

type style struct {
	Front string `json:"front" bson:"front"`
	Title string `json:"title" bson:"title"`
	Back  string `json:"back" bson:"back"`
	Info  string `json:"info" bson:"info"`
}

type newCard struct {
	User_id    int
	Data       newData
	Css        newStyle
	Users      []int
	Is_deleted bool
}

type newData struct {
	Company_Name string
	Name         string
	Title        string
	Address      string
	Phone        string
	Email        string
}

type newStyle struct {
	Front string
	Title string
	Back  string
	Info  string
}
