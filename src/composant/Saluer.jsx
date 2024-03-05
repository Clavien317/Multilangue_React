import React from 'react';
import { useTranslation } from 'react-i18next';

function Saluer() {
  const { t} = useTranslation();

  return (
    <div className='salut'>
      <h1>{t('greeting')}</h1>
      <hr />
      <br/>
      <h6>Translate 0.1 :) </h6>
      
      <p>
        {t('text')}
      </p>
    </div>
  );
}

export default Saluer;
