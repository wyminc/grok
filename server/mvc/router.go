package mvc

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

// func allCards(c *gin.Context) {
// 	data, _ := getAll()

// 	c.JSON(200, gin.H{"data": data})
// }

func Add(c *gin.Context) {
	body := &newCard{}
	c.Bind(body)

	fmt.Println(body)

	data, _ := addCard(body)

	c.JSON(200, gin.H{"data": data})
}
