package server

import (
	"github.com/gin-gonic/gin"
)

func AllCards(c *gin.Context) {
	i := (c.Param("id"))

	data, err := getAll(i)

	if err != nil {
		c.JSON(400, "Card does not exist")
	}

	c.JSON(200, data)
}

func Card(c *gin.Context) {
	i := (c.Param("id"))

	data, err := getSpecific(i)

	if err != nil {
		c.JSON(400, "Cards do not exist")
	}

	c.JSON(200, data)
}

func Add(c *gin.Context) {
	body := &newCard{}
	c.Bind(body)

	data, _ := addCard(body)

	c.JSON(200, data)
}

func Update(c *gin.Context) {
	i := (c.Param("id"))

	body := &newCard{}
	c.Bind(body)

	data, _ := updateCard(i, body)

	c.JSON(200, data)
}

func Delete(c *gin.Context) {
	i := (c.Param("id"))

	data, _ := deleteCard(i)

	c.JSON(200, data)
}
