import React from 'react';

export default function TransparentPixel() {
  return (
    <img
      className="opacity-0 absolute h-0 -z-10"
      src="https://cloudcdn-img.com/static/prt/spacer.gif"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
