package com.RentCar.backendC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RentCar.backendC.model.Car;
import com.RentCar.backendC.repository.CarRepository;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

     public List<Car> getAvailableCars() {
        return carRepository.findByIsAvailableTrue();
    }

}
