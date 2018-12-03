package main

import (
	"log"

	"./mvc"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load("../.env")
	router := gin.Default()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// router.GET("/all", mvc.allCards)
	router.POST("/add", mvc.Add)

	router.Run()
}
