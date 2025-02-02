package com.RentCar.backendC.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RentCar.backendC.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);

}
