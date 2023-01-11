import { useRecordContext } from 'react-admin';

export const TruncatedTextField = ({ record }) => {
  const source = useRecordContext();
    let str = source.text;
    return str ? (
      <span>{str.length > 100 ?  str.slice(0,100) + "..." : str}</span>
    ) : null;
  };