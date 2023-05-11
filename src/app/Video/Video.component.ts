import { Component, OnInit } from '@angular/core';
import {Video } from '../model/Video';
import { ConsumerProductsService } from '../Services/consumer-products.service';


@Component({
  selector: 'app-product',
  templateUrl: './Video.component.html',
  styleUrls: ['./Video.component.css']
})
export class VideoComponent implements OnInit {

  listProduct!: Video[] ;
  listProductByPrice !: Video[] ;
  
  priceMax!: number ; 
  
  constructor(private consumerProductsService: ConsumerProductsService) { }

 
  getproduct(){
    this.consumerProductsService.getVideo().subscribe((data : any ) =>
    {this.listProduct =data ;
    return data ;})
   }
   deleted(id:number)
   {
    this.consumerProductsService.delete(id).subscribe({
      next:()=>this.listProduct=this.listProduct.filter((p)=>p.id!)
    })
   }

  ngOnInit(): void {
   this.getproduct() ;
  }

}
