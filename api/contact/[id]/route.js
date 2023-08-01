import Product from '../../../models/page'
import connectDB from '../../../lib/connectDB'
import { NextResponse } from "next/server";

export async function GET(request,{params}){
  
try {
    const {id}=params;
    console.log(id);
    await connectDB(); 
    const product= await Product.findOne({_id:id});
    return NextResponse.json({product});
} catch (error) {
    return NextResponse.json({message:"product not found",error})
}
}

export async function PUT(request,{params}){
    const {id}=params;
    const {newName:name,newPrice:price,newDescription:description,newMedaiUrl:mediaUrl}=await request.json();
    await connectDB();
    await Product.findByIdAndUpdate(id,{name,price,description,mediaUrl});
    return NextResponse.json({message:"topic Update"},{status:200})

}