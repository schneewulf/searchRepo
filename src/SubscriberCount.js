//@flow

import React from 'react';

type Props = {
  subscriber: string,
};

export default function SubscriberCount(props: Props) {
  let {subscriber} = props;
  return <p>{subscriber}</p>;
}
