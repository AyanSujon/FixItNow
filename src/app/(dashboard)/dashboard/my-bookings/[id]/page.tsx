import { getBookingById } from '@/app/(dashboard)/_actions/getBookingById';
import React from 'react'

export default async function SingleBookingPage({ params }: { params: Promise<{ id: string }> }) {
const {id} = await params;

const result = await getBookingById(id);

console.log(result)
  return (
    <div>SingleBookingPage {id}</div>
  )
}
