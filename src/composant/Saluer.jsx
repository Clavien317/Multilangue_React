import React from 'react';
import { useTranslation } from 'react-i18next';

function Saluer() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
    </div>
  );
}

export default Saluer;
