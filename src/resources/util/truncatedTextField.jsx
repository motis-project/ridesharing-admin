export const TruncatedTextField = ({ record }) => {
    if (!record) {
      console.log("record is null")
      return null;
    }
    let str = record.text;
    return record ? (
      <span>{str.length > 50 ?  str.slice(0,50) + "..." : str}</span>
    ) : null;
  };