package com.RentCar.backendC.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    // Using a strong secret key
    private final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Extract email from JWT (assumes email is used as the subject in the token)
    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);  // Email is stored in subject claim
    }

    // Extract expiration date from JWT
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Generic method to extract claims
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Parse the JWT token to extract all claims
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Check if the token is expired
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Generate JWT token for the given email
    public String generateToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, email);
    }

    // Create the JWT token
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject) // Use email as the subject
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours validity
                .signWith(secretKey)
                .compact();
    }

    // Validate the token by checking if the email matches and if the token is not expired
    public Boolean isTokenValid(String token, String email) {
        final String extractedEmail = extractEmail(token);  // Get email from token
        return (extractedEmail.equals(email) && !isTokenExpired(token));  // Check if email matches and token is not expired
    }
}
