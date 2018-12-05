package server

import (
	"strconv"

	"github.com/gin-gonic/gin"
)

func AllCards(c *gin.Context) {
	iString := (c.Param("id"))
	iInt, _ := strconv.Atoi(iString)

	data, _ := getAll(iInt)

	c.JSON(200, gin.H{"data": data})
}

func Card(c *gin.Context) {
	iString := (c.Param("id"))
	iInt, _ := strconv.Atoi(iString)

	data, _ := getSpecific(iInt)

	c.JSON(200, gin.H{"data": data})
}

func Add(c *gin.Context) {
	body := &newCard{}
	c.Bind(body)

	data, _ := addCard(body)

	c.JSON(200, gin.H{"data": data})
}

func Update(c *gin.Context) {
	iString := (c.Param("id"))
	iInt, _ := strconv.Atoi(iString)

	body := &newCard{}
	c.Bind(body)

	data, _ := updateCard(iInt, body)

	c.JSON(200, gin.H{"data": data})
}

func Delete(c *gin.Context) {
	iString := (c.Param("id"))
	iInt, _ := strconv.Atoi(iString)

	data, _ := deleteCard(iInt)

	c.JSON(200, gin.H{"data": data})
}
