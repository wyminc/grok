package mvc

import (
	"fmt"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

func createSession(addr string) (*mgo.Session, error) {
	session, err := mgo.Dial(addr)
	if err != nil {
		panic(err)
	}

	return session.Copy(), err
}

// func getAll() {
// 	session, err := createSession("localhost")
// 	defer session.Close()

// 	c := session.DB("dummyStore").C("store")
// }

func addCard(data *newCard) (card, error) {

	session, err := createSession("localhost")
	defer session.Close()

	c := session.DB("grok").C("cards")
	err = c.Insert(data)

	result := card{}
	err = c.Find(bson.M{"user_id": data.User_id}).One(&result)

	if err != nil {
		panic(err)
	}

	fmt.Println(result)

	return result, err
}
