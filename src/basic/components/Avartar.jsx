import React from 'react';

export default function Avatar({image, isNew}) {
  return (
    <div className='avartar'>
       <img className='photo' src={image} alt="avatar" />
       {isNew && <sapn className='new'>new</sapn>}
    </div>
  );
}

