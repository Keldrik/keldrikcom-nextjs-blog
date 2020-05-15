import React from 'react';
import { parseISO, format } from 'date-fns';
import { de } from 'date-fns/locale';

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time itemProp="datePublished" dateTime={dateString}>
      {format(date, 'EEEE, do MMMM yyyy', { locale: de })}
    </time>
  );
}
