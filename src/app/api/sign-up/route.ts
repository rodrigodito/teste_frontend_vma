import { NextResponse } from 'next/server'

export async function POST() {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('success')
      }, 200)
    })
    return NextResponse.json({
      message: 'success'
    })
  } catch (e) {
    new Error()
  }
}
