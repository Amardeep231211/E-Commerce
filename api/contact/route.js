import { NextResponse } from "next/server";
import connectDB from '../../lib/connectDB'
import  Product from '../../models/page'


export  async function POST(request){
    const{name,price,description,mediaUrl}= await request.json();

    console.log("name",name);
    console.log("price",price);
    console.log("description",description);
    console.log("mediaUrl",mediaUrl);

    await connectDB();
    await Product.create({name,price,description,mediaUrl});
    return NextResponse.json({message:"data send to mongodb"},{status:201});
  
}

export async function GET(){
    await connectDB();
    const product=await Product.find();
    return NextResponse.json({product});
}

// export async function GET({id}){

//     const id=request.nextUrl.searchParams.get("id");
//     await connectDB();
//     await Product.findOne(id);
//     return NextResponse.json({message:"product find"},{status:201});
// }