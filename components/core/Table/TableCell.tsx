import React from "react";
import Image from "next/image";

interface TableCellProps {
  img?: {
    src: string;
    alt: string;
  };
  value?: any;
}

export default function TableCell({ value, img }: TableCellProps) {
  return (
    <div className='flex items-center'>
      {img && (
        <div className='relative overflow-hidden rounded-xl w-20 h-20 mr-3'>
          <Image src={img.src} layout='fill' objectFit='cover' alt={img.alt} />
        </div>
      )}
      <i>{value}</i>
    </div>
  );
}
