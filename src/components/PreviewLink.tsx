'use client'

import Link from 'next/link'

const PreviewLink = ({
    link,
}: {
    link: string
}) => {

    return (
        <Link href={link} target='_blank' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-700 p-2 text-white'>
            Preview Link
        </Link>
    )
}

export default PreviewLink
