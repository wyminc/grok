package server

import "gopkg.in/mgo.v2/bson"

type card struct {
	Id         bson.ObjectId `json:"_id" bson:"_id"`
	User_id    string        `json:"user_id" bson:"user_id"`
	Data       data          `json:"data" bson:"data"`
	Css        style         `json:"css" bson:"css"`
	Users      []string      `json:"users" bson:"users"`
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
	Back    string `json:"back" bson:"back"`
	Company string `json:"company" bson:"company"`
	Front   string `json:"front" bson:"front"`
	Info    string `json:"info" bson:"info"`
}

type newCard struct {
	User_id    string
	Data       newData
	Css        newStyle
	Users      []string
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
	Back    string
	Company string
	Front   string
	Info    string
}
