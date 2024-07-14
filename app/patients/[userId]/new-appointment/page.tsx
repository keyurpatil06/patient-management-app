import AppointmentForm from '@/components/forms/AppointmentForm'
import { getPatient } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  // console.log({patient})

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px]">
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type='create'
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright py-12 mt-10">&copy; 2024 CarePulse.</p>
        </div>
      </section>

      <Image
        src='/assets/images/appointment-img.png'
        height={1000}
        width={1000}
        alt='appointment'
        className="side-img max-w-[390px]"
      />
    </div>
  )
}

export default NewAppointment
