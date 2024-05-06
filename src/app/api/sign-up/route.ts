import { NextResponse } from 'next/server'

export async function POST() {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('success')
      }, 500)
    })
    return NextResponse.json({
      message: 'success'
    })
  } catch (e) {
    new Error()
  }
}
