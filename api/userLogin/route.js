import connectDB from '../../lib/connectDB'
import { NextResponse } from 'next/server'
import User from '../../models/user/page'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export async function POST(NextRequest) {
  const data = await NextRequest.json();
  const { userEmail, userPassword } = data
  try {

    if (!userEmail || !userPassword) {
      NextResponse.json({ message: "Please fill all the filds" }, { status: 300 })
    }
    connectDB();
   

    const user = await User.findOne({ userEmail })
    if (!user) {
      return NextResponse.json({ message: "User don't exists this email" }, { status: 300 });
    }

    const match = await bcrypt.compare(userPassword, user.userPassword)
    if (match) {
      //prove token for check user login or not
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

      const response = NextResponse.json({
        message: "Login successful",
        success: true,
      })
      response.cookies.set("token", token, {
        httpOnly: true,
      })
      return response;
    }


    else {
      return NextResponse.json({ message: "User Name or Paassword Incurrect Please Provide currect Email Password" }, { status: 300 })
    }
  } catch (error) {
    console.log(error);
  }
}