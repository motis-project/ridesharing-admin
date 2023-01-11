import { useRecordContext } from 'react-admin';

export const TruncatedTextField = ({ source, length = 100 }) => {
  const record = useRecordContext();
    let str = record[source];
    return str ? (
      <span>{str.length > length ?  str.slice(0,length) + "..." : str}</span>
    ) : null;
  };