import { StatusIcon } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div className={clsx('status-badge', {
      'bg-green-600': status === 'scheduled',
      'bg-blue-600': status === 'pending',
      'bg-red-600': status === 'cancelled',
    })}>
      <Image
        src={StatusIcon[status]}
        alt={status}
        width={24}
        height={24}
      />
      <p className={clsx('text-12-semibold', {
        'text-green-500': status === 'scheduled',
        'text-blue-500': status === 'pending',
        'text-red-500': status === 'cancelled',
      })}>{status}</p>
    </div>
  )
}

export default StatusBadge
