import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import { isFuture } from 'date-fns';

import { ThemeContext } from 'contexts';
import { getHumanDate } from '../item-tools';

type WorkPublishedOnProps = {
  publishedOn: firebase.firestore.Timestamp | null;
  isRangeDate?: boolean;
};

const WorkPublishedOn: FC<WorkPublishedOnProps> = ({ publishedOn }) => {
  const theme = useContext(ThemeContext);
  const PublishedOn = styled.div`
    &&& {
      color: ${theme.color.black};
      font-size: 0.85rem;
      font-weight: normal;
      margin-bottom: 0.75rem;
      margin-top: -1rem;
    }

    .scheduled {
      margin-left: 0.35em;
    }
  `;
  const scheduled =
    publishedOn && isFuture(publishedOn.toDate()) ? '発売予定' : '発売';

  return (
    <PublishedOn>
      {getHumanDate(publishedOn)}
      <span className="scheduled">{scheduled}</span>
    </PublishedOn>
  );
};

export default WorkPublishedOn;
