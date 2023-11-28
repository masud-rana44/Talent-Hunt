import Loader from "../components/Shared/Loader";
import useContests from "../hooks/useContests";
import ContestCard from "../components/Home/ContestCard";
import Container from "../components/Shared/Container";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Grid } from "@mui/material";

const AllContests = () => {
  const { contests, isLoading } = useContests();
  const [value, setValue] = React.useState(0);

  if (isLoading) return <Loader />;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-20">
      <Container>
        <div className="w-full mx-auto text-center">
          {/* <Grid sx={{ mx: "auto", width: "100%" }}> */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab icon={<PhoneIcon />} label="RECENTS" />
            <Tab icon={<FavoriteIcon />} label="FAVORITES" />
            <Tab icon={<PersonPinIcon />} label="NEARBY" />
          </Tabs>
          {/* </Grid> */}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {contests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllContests;
