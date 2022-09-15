import React from "react";
import {useQuery} from "react-query";
import {fetchUser} from "../../../../Services/user";
import {useParams} from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const { data, status } = useQuery(`userInfo_${id}`, () => fetchUser(parseInt(id as string)));

  return <>
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === "success" && (
      <div className="userInfo">{JSON.stringify(data)}</div>
    )}
  </>;
}

export default UserDetails;
