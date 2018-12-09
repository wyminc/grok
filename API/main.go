package main

import (
	"./server"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// err := godotenv.Load("../.env")
	router := gin.Default()

	router.Use(cors.Default())

	// if err != nil {
	// 	log.Fatal("Error loading .env file")
	// }

	router.GET("/specific/:id", server.Card)    //Card by specific id
	router.GET("/all/:id", server.AllCards)     //All cards in the wallet of id
	router.POST("/add", server.Add)             //Add card
	router.PUT("/update/:id", server.Update)    //Update card
	router.DELETE("/delete/:id", server.Delete) //"Delete" card

	router.Run(":8000")
}
