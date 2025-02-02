package com.RentCar.backendC.model;

public class JwtResponse {
    private String token;

    public JwtResponse(String token) {
        this.token = token;
    }

    // Getter
    public String getToken() {
        return token;
    }

    // Setter
    public void setToken(String token) {
        this.token = token;
    }
}
