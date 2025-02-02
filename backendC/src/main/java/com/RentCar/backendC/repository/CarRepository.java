package com.RentCar.backendC.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RentCar.backendC.model.Car;
import java.util.List;

public interface CarRepository extends JpaRepository<Car,Long>{
    List<Car> findByIsAvailableTrue();

}
