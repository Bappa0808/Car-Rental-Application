package com.RentCar.backendC.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long car_id;

    private String name;

    private String brand;
    private boolean isAvailable;
    public Car() {
    }
    public Car(Long car_id, String name, String brand, boolean isAvailable) {
        this.car_id = car_id;
        this.name = name;
        this.brand = brand;
        this.isAvailable = isAvailable;
    }
    public Long getCar_id() {
        return car_id;
    }
    public void setCar_id(Long car_id) {
        this.car_id = car_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public boolean isAvailable() {
        return isAvailable;
    }
    public void setAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

    
}
