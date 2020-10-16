package utils

import (
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type jwtCustomClaims struct {
	jwt.StandardClaims
	ID string `json:"id"`
}

// CreateToken 创建token
func CreateToken(SecretKey []byte, issuer string, ID string) (tokenString string, err error) {
	claims := &jwtCustomClaims{
		jwt.StandardClaims{
			ExpiresAt: int64(time.Now().Add(time.Hour * 72).Unix()),
			Issuer:    issuer,
		},
		ID,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err = token.SignedString(SecretKey)

	return
}

// ParseToken 解析token
func ParseToken(tokenString string, SecretKey []byte) (claims jwt.Claims, err error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		hmacSampleSecret := []byte("SMILE_TOKEN")
		return hmacSampleSecret, nil
	})

	claims, _ = token.Claims.(jwt.MapClaims)

	return
}
