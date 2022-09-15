import React, {useState} from "react";
import {useQuery} from "react-query";
import {fetchUser} from "../../../../../../Services/user";
import {generatePath, Link,} from "react-router-dom";
import {Button} from "antd";

type Props = {
  userId: number
}

function TinyUserView({ userId }: Props) {
  const [showData, setShowData] = useState(false);
  const { data, status, refetch } = useQuery(`userInfo_${userId}`, () => fetchUser(userId), {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });

  const handleClick = () => {
    refetch();
    setShowData(true);
  };

  return <div>
    {!showData && <>
      <Button size={"small"} onClick={handleClick}>Load user</Button> OR
      {' '}
      <Link to={generatePath('/users/details/:id', { id: userId + '' })}>Go to detailed view</Link>
    </>
    }
    {status === "error" && <p>...</p>}
    {status === "loading" && <p>Fetching user...</p>}
    {status === "success" && (
      <Link to={generatePath('/users/details/:id', { id: userId + '' })} className="userInfo">{data?.firstName} {data?.lastName}</Link>
    )}
  </div>;
}

export default TinyUserView;
