import { basket } from "../data/basket";
import {customerService} from "./assets/general.js";

export let orderContainer = JSON.parse(localStorage.getItem('orderContainer'));

orderContainer = [{},{}];

customerService();