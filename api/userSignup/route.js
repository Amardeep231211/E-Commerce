
import connectDB from '../../lib/connectDB'
import User from '../../models/user/page'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'



export async function POST(NextRequest) {
    try {
        connectDB();
        const data = await NextRequest.json();
       const { userName, userEmail, userPassword } = data;
       
        //check if user already exists
        const user = await User.findOne({ userEmail })
        
        if (user) {
            return NextResponse.json({ error: "User already exists Please Login" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(userPassword, 10)
        const newUser =  await new User({
            userName,
            userEmail,
            userPassword: hashedPassword
        })
        const savedUser = await newUser.save()
        return NextResponse.json({ message: "User Created Successfully" })
    } catch (error) {
        return NextResponse.json({ message: "error accure when post user", error }), { status: 300 }
    }
}
