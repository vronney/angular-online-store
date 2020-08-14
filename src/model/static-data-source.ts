import { Injectable } from '@angular/core';
import { Product } from './product-model';
import {Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSourceService {

  constructor() { }

  private products: Product[] = [
    new Product(1, './../../assets/images/Marcy_Pro_Smith.jpg', 'Marcy Pro Smith Machine Weight Bench Home Gym', 'Workout Equipment', 'All-in-One Station - You don’t have to switch between various workout stations with this gym system that combines different strength building machines: a Power Tower, Utility Bench, and Squat Rack. It also has a dedicated landmine exercise attachment. (Workout Equipment)', 1649),
    new Product(2, './../../assets/images/Commercial_Home_Gym.jpg', 'Commercial Home Gym - Smith Machine, Cables with Built in 160 kg Weights', 'Workout Equipment', 'Smith Machine with 12 adjustable heights. High tension 2000 lb cross cables with 16 adjustable heights. 1:1 pull ratio (Workout Equipment)', 3599),
    new Product(3, './../../assets/images/Saucony_Trail_Running_Shoe.jpg', 'Saucony Men\'s Mad River TR Trail Running Shoe', 'Workout Apparel', 'PWRFOAM midsole, EVERUN topsole construction for continuous cushioning throughout the run, PWRTRAC tacky rubber, combined with a dual compound outsole, and rugged directional lugs for confidence on any surface at any speed (Workout Apparel)', 145.99),
    new Product(4, './../../assets/images/Carhartt_Deluxe_Cooler.jpg', 'Carhartt Deluxe Dual Compartment Insulated Lunch Cooler Bag, Black', 'Workout Accessories', 'Dual compartment insulated lunch bag made of heavy duty fabric with Rain Defender durable water repellent, Insulated main compartment keeps food and drinks cool and is large enough for a 6-pack (Workout Accessories)', 24.99),
    new Product(5, './../../assets/images/Under_Armour_T-Shirt.jpg', 'Under Armour Men\'s Tech 2.0 Short Sleeve T-Shirt', 'Workout Apparel', 'UA Tech fabric is quick-drying, ultra-soft & has a more natural feel (Workout Apparel)', 18.57),
    new Product(6, './../../assets/images/Calvin_Klein_Euphoria.jpg', 'Calvin Klein Deep Euphoria Eau de Parfum, 3.4 Fl Oz', 'Fragrances', 'Deep euphoria is a new expression of euphoric fantasy. The scent opens with notes of cascalone and black magic rose enhancing the signature of sensuality and modern femininity. The drydown of musk brings a smooth, sensual texture immersing you deep within the fragrance, evoking warmth and pleasure. (Fragrances)', 99),
    new Product(7, './../../assets/images/Calvin_Klein_Eternity.jpg', 'Calvin Klein Eternity Eau de Parfum, 3.3 Oz', 'Fragrances', 'The signature scent of an all out romantic, Eternity Eau de Parfumby Calvin Klein transitions beautifully from day to evening. A hymn to love, Eternity opens with notes of mandarin and freesia then delivers a bouquet of beautiful flowers: lily of the valley, violet and spicy carnation. Gentle sandalwood lingers in the dry down. (Fragrances)', 92),
    new Product(8, './../../assets/images/Letscom_Fitness_Tracker.jpg', 'LETSCOM Fitness Tracker HR', 'Workout Accessories', 'Activity Tracker Watch with Heart Rate Monitor, Waterproof Smart Fitness Band with Step Counter, Calorie Counter, Pedometer Watch for Women and Men (Workout Accessories)', 23.99),
    new Product(9, './../../assets/images/HMC_Indoor_Exercise_Bike.jpg', 'HMC Indoor Exercise Bike', 'Stationary Equipment', 'Cycling Stationary Bike ,Adjustable Handlebar and Seat, Magnetic Resistance Ultra-Quiet Fitness Equipment for Home Workout, Heavy Duty Flywheel (44 Lbs) (Stationary Equipment)', 439.99),
    new Product(10, './../../assets/images/HouseFit_Water_Rower.jpg', 'HouseFit Water Rower Rowing Machine', 'Stationary Equipment', 'HouseFit Water Rower Rowing Machine 330Lbs Weight Capacity for Home use Water Resistance Row Machine Exercise with iPad and Phone Support LCD Digital Monitor (Stationary Equipment)', 379.99),
    new Product(11, './../assets/images/Kindle_PaperWhite_Sage.jpg', 'Kindle Paperwhite – Now Waterproof with more than 2x the Storage', 'Tech', 'Our thinnest, lightest Kindle Paperwhite yet, with a sleek, modern design so you can read comfortably for hours. Features our signature 300 ppi, glare-free Paperwhite display, laser-quality text, and twice the storage of the previous generation. Plus a single battery charge lasts weeks, not hours (Tech)', 159.99),
  ];

  getProducts(): Observable<Product[]> {
      return from([this.products]);
  }

  saveOrder(Order: Order): Observable<Order> {
    console.log(JSON.stringify(Order));
    return from([Order]);
  }
}
