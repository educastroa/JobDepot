import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppContext } from '../hooks';
import JobCard from "./JobCard";

export default function JobsList({ onFetchData }) {
  const { jobs } = useAppContext();

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={onFetchData}
      hasMore={jobs.length <= 500}
      loader={<h4 className="text-center">Loading...</h4>}
      scrollableTarget="scrollableDiv"
    >
      {jobs.map((job, i) => job != null && (
        <JobCard key={i} job={job} id={i} />
      ))}
    </InfiniteScroll>
  );
}





