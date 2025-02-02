package com.RentCar.backendC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.RentCar.backendC.model.JwtResponse;
import com.RentCar.backendC.model.User;
import com.RentCar.backendC.service.AuthService;
import com.RentCar.backendC.util.JwtUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public JwtResponse login(@RequestBody User user) {
        String email = user.getEmail();
        String token = authService.login(email, user.getPassword());
        return new JwtResponse(token);  // Return token as part of response
    }

    @GetMapping("/dashboard")
    public String dashboard(@RequestHeader("Authorization") String token) {
        if (token == null || !token.startsWith("Bearer ")) {
            throw new RuntimeException("Authorization token is missing or malformed");
        }

        // Extract token and remove "Bearer " prefix
        String jwtToken = token.replace("Bearer ", "").trim();

        // Extract the email from the token
        String email = jwtUtil.extractEmail(jwtToken);

        // Validate the token
        if (jwtUtil.isTokenValid(jwtToken, email)) {
            return "Welcome to the dashboard, " + email + "!";
        } else {
            throw new RuntimeException("Unauthorized access");
        }
    }
}
