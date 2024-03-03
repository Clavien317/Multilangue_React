import React from 'react';
import { useTranslation } from 'react-i18next';

function Saluer() {
  const { t} = useTranslation();

  return (
    <div className='salut'>
      <h1>{t('greeting')}</h1>
      <p>
        {t('text')}
      </p>
    </div>
  );
}

export default Saluer;
